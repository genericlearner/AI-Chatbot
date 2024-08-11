'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, Link, useMediaQuery, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

// Custom SVG Icons
function CustomIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-8 8-8s8 4 8 8" />
        </svg>
    );
}

// Define the ContributorCard component
function ContributorCard({ name, description, url }) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 300, // Increased width
                height: 200, // Keep the height same
                borderRadius: '12px',
                background: 'linear-gradient(145deg, #2c2c2c, #3a3a3a)', // Light black gradient background
                color: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover .info': {
                    opacity: 0,
                },
                '&:hover .details': {
                    opacity: 1,
                }
            }}
            onClick={() => window.open(url, '_blank')}
        >
            <Box
                className="info"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align items to the start
                    paddingLeft: 3, // Add padding to the left
                    backgroundColor: 'transparent',
                    zIndex: 1,
                    transition: 'opacity 0.3s ease',
                    opacity: 1,
                    textAlign: 'left', // Align text to the left
                }}
            >
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.4rem' }}> {/* Increased font size */}
                    {name}
                </Typography>
            </Box>
            <Box
                className="details"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align items to the start
                    paddingLeft: 3, // Add padding to the left
                    background: 'linear-gradient(145deg, #3a3a3a, #2c2c2c)', // Slightly lighter gradient for details
                    zIndex: 1,
                    transition: 'opacity 0.3s ease',
                    opacity: 0,
                    textAlign: 'left', // Align text to the left
                    padding: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="body2" color="white" sx={{ fontSize: '1rem' }}> {/* Increased font size */}
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}


const features = [
    {
        title: 'Intelligent Responses',
        description: 'Our chatbot provides accurate and contextually relevant answers using advanced AI models.',
    },
    {
        title: '24/7 Support',
        description: 'Get assistance anytime, anywhere. Our chatbot is available round the clock.',
    },
    {
        title: 'Multi-Language Support',
        description: 'Communicate in your preferred language. Our chatbot understands multiple languages.',
    },
    {
        title: 'Seamless Integration',
        description: 'Easily integrate with your existing systems and platforms for a smooth user experience.',
    },
];

const LandingPage = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    const handleSignIn = () => {
        router.push('/signin');
    };

    const handleSignUp = () => {
        router.push('/signup');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static" sx={{ backgroundColor: '#444', boxShadow: 'none' }}>
                <Toolbar>
                    <CustomIcon style={{ marginRight: 16 }} />
                    <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1, color: 'white' }}>
                        C++ Companion
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, marginRight: 2 }}>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="features"
                            smooth={true}
                            duration={500}
                            style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
                        >
                            Features
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
                        >
                            About
                        </ScrollLink>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            onClick={handleSignIn}
                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                border: '1px solid white',
                                '&:hover': { border: '1px solid #fff' }
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={handleSignUp}
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: '#444',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5',
                                    color: '#444'
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                id="home"
                component="main"
                sx={{
                    flex: 1,
                    background: 'linear-gradient(to bottom right, #2196F3, #21CBF3)',
                    color: 'white',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    py: { xs: 8, md: 15 },
                    h: '100vh',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        AI ChatBot
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Join us and experience cutting-edge solutions tailored to your needs.
                    </Typography>
                    <Button
                        onClick={handleSignUp}
                        variant="contained"
                        size="large"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#ff5722',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#e64a19'
                            }
                        }}
                    >
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Container id="features" maxWidth="md" sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                    Features
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature) => (
                        <Grid item xs={12} sm={6} md={3} key={feature.title}>
                            <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Contributor Section */}
            <Box id="about" sx={{ py: 8, background: 'linear-gradient(to right, #4a90e2, #9013fe)', color: 'white' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Gaurav Singh"
                                description="Backend Developer"
                                url="https://linkedin.com/in/gavksingh"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Md Umaruddin"
                                description="Backend Developer"
                                url="https://www.linkedin.com/in/mohammedumaruddin/"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Adriana Caraeni"
                                description="Frontend Developer"
                                url="https://www.linkedin.com/in/adriana-caraeni/"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Cadence Young"
                                description="Frontend Developer"
                                url="https://www.linkedin.com/in/cadence-young-35022831b/"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ backgroundColor: '#444', color: 'white', textAlign: 'center', py: 2 }}>
                <Typography variant="body2">&copy; 2024 C++ Companion. All rights reserved.</Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;