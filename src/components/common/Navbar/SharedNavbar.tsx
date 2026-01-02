'use client';
import { AppBar, Toolbar, Typography, Box, Stack, IconButton, Button, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface SharedNavbarProps {
    /**
     * Main title of the application (e.g. "School Grading System")
     */
    title?: string;
    /**
     * Subtitle of the application (e.g. "Student Portal")
     */
    subtitle?: string;
    /**
     * URL for the logo image
     */
    logoSrc?: string;
    /**
     * Content to render in the center (Navigation links)
     */
    centerContent?: ReactNode;
    /**
     * User profile element to render on the right
     */
    userProfile?: ReactNode;
    /**
     * Name of the user to display (default: "Someone").
     */
    userName?: string;
    /**
     * Role of the user (e.g. "Vice", "Teacher").
     */
    userRole?: string;
    /**
     * Path for logout redirection
     */
    logoutHref?: string;
}

export default function SharedNavbar({
    title = "School Grading System",
    subtitle = "Someone Portal",
    logoSrc = "/images/logoMain.png",
    centerContent,
    userProfile,
    userName = "Someone",
    userRole,
    logoutHref = "/login"
}: SharedNavbarProps) {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '0 0 24px 24px',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                px: 2,
            }}
            elevation={0}
        >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: '80px' }}>

                {/* Left Section: Logo and Text */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <img
                        src={logoSrc}
                        alt="Logo"
                        style={{ height: 40, objectFit: 'contain' }}
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                    <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                </Stack>

                {/* Center Section: Navigation Links used by the Consumer */}
                <Stack direction="row" spacing={1}>
                    {centerContent}
                </Stack>

                {/* Right Section: User Profile, Notifications, Logout */}
                <Stack direction="row" alignItems="center" spacing={2}>

                    {/* User Profile: Custom or Default */}
                    {userProfile ? (
                        userProfile
                    ) : (
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#ffc107',
                                color: '#000',
                                textTransform: 'none',
                                borderRadius: '15px',
                                boxShadow: 'none',
                                px: 2,
                                py: 0.5,
                                '&:hover': { backgroundColor: '#e0a800', boxShadow: 'none' }
                            }}
                            startIcon={<Avatar sx={{ width: 32, height: 32 }} />} // Can add userImage prop later if needed
                        >
                            <Box textAlign="left" sx={{ ml: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: '600', lineHeight: 1.2 }}>
                                    {userName}
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>
                                    {userRole || 'Variable for role'}
                                </Typography>
                            </Box>
                        </Button>
                    )}

                    {/* Standard Team Language Icon */}
                    <IconButton
                        size="medium"
                        sx={{
                            backgroundColor: '#ffc107',
                            color: '#000',
                            borderRadius: '12px',
                            '&:hover': { backgroundColor: '#e0a800' }
                        }}
                    >
                        <LanguageIcon />
                    </IconButton>

                    {/* Standard Team Logout Icon */}
                    <IconButton
                        size="medium"
                        sx={{
                            backgroundColor: '#ffebee',
                            color: '#d32f2f',
                            borderRadius: '12px',
                            '&:hover': { backgroundColor: '#ffcdd2' }
                        }}
                        component={Link}
                        href={logoutHref}
                    >
                        <LogoutIcon />
                    </IconButton>

                </Stack>

            </Toolbar>
        </AppBar>
    );
}
