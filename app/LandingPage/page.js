'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Box, Container, Grid, Card, CardContent, CardMedia, Link, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function ContributorCard({ name, description, url }) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 300,
                height: 200,
                borderRadius: '12px',
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
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    zIndex: 1,
                    transition: 'opacity 0.3s ease',
                    opacity: 1,
                    textAlign: 'center',
                    padding: 2,
                }}
            >
                <Typography variant="h6" fontWeight="bold">
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
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    zIndex: 1,
                    transition: 'opacity 0.3s ease',
                    opacity: 0,
                    textAlign: 'center',
                    padding: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="body2">
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

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSignIn = () => {
        router.push('/signin');
    };

    const handleSignUp = () => {
        router.push('/signup');
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static" sx={{ backgroundColor: '#444', boxShadow: 'none' }}>
                <Toolbar>
                    <CustomIcon style={{ marginRight: 16 }} />
                    <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1, color: 'white' }}>
                        My App
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{ '& .MuiPaper-root': { backgroundColor: '#444' } }}
                            >
                                <MenuItem onClick={handleSignIn} component="a" href="#" sx={{ color: 'white' }}>Sign In</MenuItem>
                                <MenuItem onClick={handleSignUp} component="a" href="#" sx={{ color: 'white' }}>Sign Up</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                onClick={handleSignIn}
                                sx={{
                                    color: 'white',
                                    textTransform: 'none',
                                    border: '1px solid white',
                                    '&:hover': { border: '1px solid #fff' }
                                }}
                                href="#"
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
                                href="#"
                            >
                                Sign Up
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
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
                        Transform Your Ideas into Reality
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
            <Container maxWidth="md" sx={{ py: 8 }}>
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
            <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="John Doe"
                                description="Lead Developer"
                                url="https://linkedin.com/in/johndoe"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Jane Smith"
                                description="UX Designer"
                                url="https://linkedin.com/in/janesmith"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Alice Johnson"
                                description="Front-end Developer"
                                url="https://linkedin.com/in/alicejohnson"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <ContributorCard
                                name="Bob Brown"
                                description="Back-end Developer"
                                url="https://linkedin.com/in/bobbrown"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer
            <Box sx={{ py: 2, background: 'linear-gradient(to bottom, #333, #555)', color: 'white', textAlign: 'center' }}>
                <Typography variant="body2">© 2024 My App. All rights reserved.</Typography>
                <Box sx={{ mt: 1 }}>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Terms of Service
                    </Link>
                </Box>
            </Box> */}
        </Box>
    );
};

export default LandingPage;
