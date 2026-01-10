'use client';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface SharedNavbarProps {
    subtitle?: string;
    centerContent?: React.ReactNode;
    userProfile?: React.ReactNode;
}

export default function SharedNavbar({
    subtitle = 'Portal',
    centerContent,
    userProfile
}: SharedNavbarProps) {
    return (
        <AppBar
            position="relative"
            sx={{
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                color: '#333',
                zIndex: 100,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo / Brand */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            School Grading System
                        </Typography>
                    </Link>
                    {subtitle && (
                        <Typography variant="caption" sx={{ color: '#666', ml: 1 }}>
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {/* Center Content (Navigation Links) */}
                {centerContent && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {centerContent}
                    </Box>
                )}

                {/* User Profile */}
                {userProfile && (
                    <Box>
                        {userProfile}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
