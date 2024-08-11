'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, TextField, AppBar, Toolbar, CssBaseline, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, provider } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#03dac5',
    },
    background: {
      default: '#e0f2f1',
    },
    text: {
      primary: '#212121',
      secondary: '#f50057',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

function BotIcon(props) {
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

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/chat');
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        default:
          errorMessage = 'Failed to sign in. Please check your credentials and try again.';
      }
      setError(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setValue(result.user.email);
      localStorage.setItem('email', result.user.email);
      router.push('/chat');
    } catch (error) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  const handleSignUp = () => {
    router.push('/signup');
  };

  const ToHome = () => {
    router.push('/');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <BotIcon />
          <Typography variant="h6" color="inherit" style={{ marginLeft: '10px' }}>
            <a href="/" onClick={ToHome} style={{ color: 'white', textDecoration: 'none' }}>AI Assistant</a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ padding: '20px', borderRadius: '8px', backgroundColor: '#ffffff' }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
              InputProps={{
                style: { color: theme.palette.text.primary },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.secondary.main,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
              InputProps={{
                style: { color: theme.palette.text.primary },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.secondary.main,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            {error && <Typography color="error" align="center">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, borderRadius: '20px', backgroundColor: theme.palette.primary.main, textTransform: 'none' }}
            >
              Sign In
            </Button>
            <Typography variant="body1" align="center" sx={{ color: theme.palette.text.primary }}>
              or
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2, mb: 2, borderRadius: '20px', backgroundColor: theme.palette.secondary.main, textTransform: 'none' }}
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{ color: theme.palette.text.primary, mt: 3, borderRadius: '20px', textTransform: 'none' }}
              onClick={handleSignUp}
            >
              Don&apos;t have an account? Sign Up
            </Button>
            {/* Back Button */}
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mt: 2, borderRadius: '20px', textTransform: 'none' }}
              onClick={handleBack}
            >
              Back
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;