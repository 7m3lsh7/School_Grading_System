'use client';
import { AppBar, Toolbar, Button, Avatar, Box, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';

export default function Navbar() {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        color: '#333',
        zIndex: 100,
        borderRadius: '0 0 24px 24px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        {/* Logo / Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image
            src="/images/LogoMain.png"
            alt="Logo"
            width={120}
            height={48}
            style={{ width: 'auto', height: '48px', objectFit: 'contain' }}
          />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333', lineHeight: 1.2 }}>
              School Grading System
            </Typography>
            <Typography variant="caption" sx={{ color: '#666' }}>
              Student Portal
            </Typography>
          </Box>
        </Box>

        {/* Center Content (Navigation Links) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            component={Link}
            href="/"
            sx={{
              color: '#ffc107',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '12px',
              px: 2,
              '&:hover': { backgroundColor: 'rgba(255, 193, 7, 0.1)' }
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/years"
            sx={{
              color: '#555',
              textTransform: 'none',
              borderRadius: '12px',
              px: 2,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            Years
          </Button>
          <Button
            component={Link}
            href="/about"
            sx={{
              color: '#555',
              textTransform: 'none',
              borderRadius: '12px',
              px: 2,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            About
          </Button>
        </Box>

        {/* Right Section: Profile, Language, Logout */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* User Profile */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffc107',
              color: '#000',
              textTransform: 'none',
              borderRadius: '24px',
              boxShadow: 'none',
              px: 2,
              py: 0.75,
              '&:hover': { backgroundColor: '#e0a800', boxShadow: 'none' }
            }}
            startIcon={<Avatar sx={{ width: 28, height: 28 }} />}
          >
            <Box textAlign="left" sx={{ ml: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: '600', lineHeight: 1.2, fontSize: '0.85rem' }}>
                Ahmed Mohamed
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '0.7rem', opacity: 0.8 }}>
                See profile
              </Typography>
            </Box>
          </Button>

          {/* Language Toggle */}
          <IconButton
            sx={{
              backgroundColor: '#ffc107',
              color: '#000',
              width: 36,
              height: 36,
              '&:hover': { backgroundColor: '#e0a800' }
            }}
          >
            <LanguageIcon sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Logout Button */}
          <IconButton
            sx={{
              backgroundColor: '#ffc107',
              color: '#000',
              width: 36,
              height: 36,
              '&:hover': { backgroundColor: '#e0a800' }
            }}
          >
            <LogoutIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
