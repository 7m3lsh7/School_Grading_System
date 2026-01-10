'use client';
import { Box, Button, TextField, Typography, Paper, Container } from '@mui/material';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement login logic
        console.log('Login attempt:', { email, password });
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: '100%',
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        Login
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
                        Sign in to School Grading System
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                py: 1.5,
                                backgroundColor: '#ffc107',
                                color: '#000',
                                '&:hover': { backgroundColor: '#e0a800' },
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
