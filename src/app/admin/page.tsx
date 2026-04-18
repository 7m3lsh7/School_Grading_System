"use client";

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Stack
} from '@mui/material';
import SharedNavbar from '@/components/layout/SharedNavbar';
import LevelCard from '@/components/admin/LevelCard';
import { adminLevels } from '@/data/adminDashboard';

export default function AdminDashboard() {
  return (
    <>
      <SharedNavbar />

      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("/Images/Factory.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',   
          py: { xs: 4, md: 6 },          
        }}
      >
      
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            zIndex: 1,
          }}
        />

        <Container 
          maxWidth="xl" 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 6 }
          }}
        >
      
          <Box
            sx={{
              background: 'rgba(75, 75, 75, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 4,
              p: { xs: 3, sm: 5, md: 7, lg: 8 },
              maxWidth: { lg: '1760px' },
              margin: '0 auto',
              minHeight: { md: '662px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: { xs: 2, md: 4 },       
              mb: { xs: 4, md: 6 },        
            }}
          >
            {/* Welcome Section */}
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ 
                  fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.8rem' },
                  color: '#fff'
                }}
              >
                Welcome, Ahmed Mohamed
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mt: 1.5, 
                  opacity: 0.95,
                  color: '#fff'
                }}
              >
                Administrator Portal
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mt: 2, 
                  opacity: 0.85, 
                  maxWidth: 650,
                  color: '#fff',
                  lineHeight: 1.6
                }}
              >
                Review, Approve, and manage student grades and access.
              </Typography>
            </Box>

            {/* الكروت */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, md: 4 }}
              justifyContent="center"
              alignItems="stretch"
            >
              {adminLevels.map((level) => (
                <Box 
                  key={level.number}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '504px' },
                  }}
                >
                  <LevelCard {...level} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}