'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  TextField,
  Stack,
  Grow,
  Menu,
  MenuItem,
} from '@mui/material';
import { AccountCircle, ExitToApp, Send } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Retain GitHub dark theme
import { useRouter } from 'next/navigation';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { firestore, auth } from '@/firebase';
import withAuth from '../protectedRoute';

// Custom SVG component for the bot icon
function AssistantIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

const SupportPage = () => {
  const [chatHistory, updateChatHistory] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your C++ tutor, ready to help you with any code questions.",
    },
  ]);

  const [currentInput, setCurrentInput] = useState('');
  const [processing, setProcessing] = useState(false);
  const [inputPosition, setInputPosition] = useState(false);
  const chatEndRef = useRef(null);
  const inputFieldRef = useRef(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userUid, setUserUid] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Adds user message and a placeholder for the bot's reply
  const addMessageAndPlaceholder = (msg, updateChatHistory) => {
    updateChatHistory((previousChat) => [
      ...previousChat,
      { role: 'user', content: msg },
      { role: 'assistant', content: '' },
    ]);
  };

  // Processes the server response stream
  const processServerStream = async (reader, decoder, updateChatHistory) => {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const decodedText = decoder.decode(value, { stream: true });
      appendToLastMessage(decodedText, updateChatHistory);
    }
  };

  // Appends new text to the last bot message
  const appendToLastMessage = (text, updateChatHistory) => {
    updateChatHistory((previousChat) => {
      const lastMessage = previousChat[previousChat.length - 1];
      const otherMessages = previousChat.slice(0, previousChat.length - 1);

      return [
        ...otherMessages,
        { ...lastMessage, content: lastMessage.content + text },
      ];
    });
  };

  // Handles errors during the fetch request
  const handleFetchError = (updateChatHistory) => {
    updateChatHistory((previousChat) => [
      ...previousChat,
      {
        role: 'assistant',
        content: "Apologies, an error occurred. Please try again.",
      },
    ]);
  };

  // Sends the message input by the user
  const handleSendMessage = async () => {
    if (!currentInput.trim() || processing) return;
    setProcessing(true);

    addMessageAndPlaceholder(currentInput, updateChatHistory);
    setCurrentInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([...chatHistory, { role: 'user', content: currentInput }]),
      });

      if (!response.ok) throw new Error('Network response failed');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      await processServerStream(reader, decoder, updateChatHistory);
    } catch (error) {
      console.error('Error:', error);
      handleFetchError(updateChatHistory);
    }

    setProcessing(false);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setInputPosition(true);
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const openProfileMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeProfileMenu = () => {
    setMenuAnchor(null);
  };

  const signOutUser = async () => {
    await signOut(auth);
    router.push('/');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setUserUid(user.uid);
      } else {
        setUserEmail('');
        setUserUid('');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#181818', color: '#E0E0E0' }}>
      <AppBar position="static" elevation={0} style={{ backgroundColor: '#181818', color: '#E0E0E0' }}>
        <Toolbar>
          <AssistantIcon />

          <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 10 }}>
            AI Support
          </Typography>

          <IconButton onClick={openProfileMenu} sx={{ marginLeft: 'auto' }}>
            <AccountCircle fontSize="large" sx={{ color: '#CCCCCC' }} />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeProfileMenu}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#242424',
                color: '#E0E0E0',
              },
            }}
          >
            <MenuItem>
              <Typography variant="body2">{userEmail}</Typography>
            </MenuItem>
            <MenuItem onClick={signOutUser}>
              <ExitToApp fontSize="small" />
              <Typography variant="body2" sx={{ marginLeft: 1 }}>Log Out</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '55px' }}>
        {!inputPosition ? (
          <Container maxWidth="md" style={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom align="center" style={{ color: '#E0E0E0' }} mt="15vh">
              Seamless Customer Support with AI
            </Typography>
            <Typography variant="h5" paragraph align="center" style={{ color: '#A0A0A0' }}>
              Our AI-powered support is here to assist with all your queries. Get real-time help and personalized answers.
            </Typography>
            <Box mt={4} display="flex" justifyContent="center">
              <TextField
                variant="outlined"
                autoComplete="off"
                placeholder="How can I help you today?"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleEnterPress}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <Send style={{ color: '#E0E0E0' }} />
                    </IconButton>
                  ),
                }}
                fullWidth
                sx={{
                  backgroundColor: '#2C2C2C',
                  color: '#E0E0E0',
                  borderRadius: '50px',
                  width: '600px',

                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',

                    '& fieldset': {
                      borderColor: '#666',
                    },
                    '&:hover fieldset': {
                      borderColor: '#888',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#E0E0E0',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#E0E0E0',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#BBBBBB',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#E0E0E0',
                  },
                }}
              />
            </Box>
          </Container>
        ) : (
          <Container maxWidth="md">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '16px',
                borderRadius: '8px',
              }}
            >
              <Stack spacing={2}>
                {chatHistory.map((msg, index) => (
                  <Grow key={index} in>
                    <Box
                      sx={{
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        backgroundColor: msg.role === 'user' ? '#3E7CFC' : '#2C2C2C',
                        color: msg.role === 'user' ? '#E0E0E0' : '#E0E0E0',
                        borderRadius: '12px',
                        padding: '10px 16px',
                        maxWidth: '75%',
                        wordBreak: 'break-word',
                        boxShadow: 3,
                        position: 'relative',
                      }}
                    >
                      <ReactMarkdown
                        children={msg.content}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                      />
                    </Box>
                  </Grow>
                ))}
              </Stack>
              <div ref={chatEndRef} />
            </Box>
          </Container>
        )}
      </main>

      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          padding: '12px 0',
          backgroundColor: '#181818',
          borderTop: '1px solid #444',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TextField
          variant="outlined"
          autoComplete="off"
          placeholder="Ask me anything..."
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleEnterPress}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSendMessage} disabled={processing}>
                <Send style={{ color: '#E0E0E0' }} />
              </IconButton>
            ),
          }}
          fullWidth
          sx={{
            backgroundColor: '#2C2C2C',
            color: '#E0E0E0',
            borderRadius: '50px',
            paddingLeft: '15px',

            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',

              '& fieldset': {
                borderColor: '#666',
              },
              '&:hover fieldset': {
                borderColor: '#888',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#E0E0E0',
              },
            },
            '& .MuiInputBase-input': {
              color: '#E0E0E0',
            },
            '& .MuiInputLabel-root': {
              color: '#BBBBBB',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#E0E0E0',
            },
          }}
        />
      </Container>
    </div>
  );
};

export default withAuth(SupportPage);
