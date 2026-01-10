'use client';

import React from 'react';
import { Stack, Container, Box } from '@mui/material';
import YearsCard from '../../../components/TeacherComponents/YearsSection';
import ThreeLines from '../../../components/TeacherComponents/HeaderTitle';
import { yearsData } from '../../../data/YearsCard';
import { headerLines } from '../../../data/HeaderTitle';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url('/Images/Background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 4,
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ px: 2 }}>
        {/* مستطيل Header فقط */}
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.25)',
            borderRadius: 2,
            p: 3,
            mb: 4,
          }}
        >
          <ThreeLines lines={headerLines} />
        </Box>

        {/* مستطيل خلف الكروت */}
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.25)', // شفافية خفيفة للمستطيل الكبير
            borderRadius: 2,
            p: 3,
          }}
        >
          <Stack spacing={3}>
            {yearsData.map((card) => (
              <Box
                key={card.id}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.85)', // مستطيل خلف كل كارد شفاف
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <YearsCard data={card} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
