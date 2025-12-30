import React from 'react';
import { Stack, Container } from '@mui/material';
import YearsCard from '../../../components/TeacherComponents/YearsSection'; 
import { yearsData } from '../../../data/YearsCard'; 

export default function Home() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Stack spacing={2}>
        {yearsData.map((card) => (
          <YearsCard key={card.id} data={card} />
        ))}
      </Stack>
    </Container>
  );
}
