"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Card,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ===== types & data =====
import { LoginPayload } from "@/types/login";
import { initialLoginData } from "@/data/login";

// ===== images =====
const images = [
    "/Images/login/1.jpg",
    "/Images/login/2.jpg",
    "/Images/login/3.jpg",
    "/Images/login/4.jpg",
    "/Images/login/5.jpg",
    "/Images/login/6.jpg",
    "/Images/login/7.jpg",
];

const logos = [
    "/Images/login/logo.png",
    "/Images/login/logo2.png",
];

const LoginPage = () => {
    const theme = useTheme();

    // ===== state =====
    const [currentImage, setCurrentImage] = useState(0);
    const [loginData, setLoginData] =
        useState<LoginPayload>(initialLoginData);
    const [loading, setLoading] = useState(false);

    // ===== carousel =====
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // ===== handlers =====
    const handleChange =
        (field: keyof LoginPayload) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setLoginData((prev) => ({
                    ...prev,
                    [field]: e.target.value,
                }));
            };

    const handleLogin = async () => {
        setLoading(true);

        try {
            
            console.log("Login Payload:", loginData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex" }}>
            {/* Right - Login */}
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "100%", maxWidth: 420 }}>
                    {/* Logos */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mb: 3,
                        }}
                    >
                        {logos.map((src, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={src}
                                alt={`logo-${index}`}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    objectFit: "contain",
                                    borderRadius: "16px",
                                }}
                            />
                        ))}
                    </Box>

                    {/* Login Card */}
                    <Card
                        sx={{
                            p: 4,
                            borderRadius: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                        }}
                    >
                        <Typography variant="h2" mb={1}>
                            Admin Portal
                        </Typography>

                        <Typography
                            variant="body2"
                            color={theme.palette.text.secondary}
                            mb={3}
                        >
                            Sign in to access student records and grade management.
                        </Typography>

                        <TextField
                            fullWidth
                            label="Username"
                            value={loginData.username}
                            onChange={handleChange("username")}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={loginData.password}
                            onChange={handleChange("password")}
                            sx={{ mb: 3 }}
                        />

                        <Button
                            fullWidth
                            disabled={loading}
                            onClick={handleLogin}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                height: 44,
                                borderRadius: "10px",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            }}
                        >
                            <Typography variant="h3">
                                {loading ? "Signing In..." : "Sign In"}
                            </Typography>
                        </Button>

                        <Typography
                            variant="body2"
                            textAlign="center"
                            mt={3}
                            color={theme.palette.text.secondary}
                        >
                            Don’t have an account?{" "}
                            <strong>Contact your administrator</strong>
                        </Typography>
                    </Card>
                </Box>
            </Box>

            {/* Left - Carousel */}
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    width: "60%",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${images[currentImage]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "background-image 0.6s ease-in-out",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
