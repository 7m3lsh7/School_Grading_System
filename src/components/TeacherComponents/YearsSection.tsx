import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { YearSection } from '../../types/YearsCard';

interface Props {
  data: YearSection;
}

const YearsCard: React.FC<Props> = ({ data }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#0f0f0f',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 214, 0, 0.8)', 
          px: 3,
          py: 1.5,
        }}
      >
        <Typography fontWeight="bold" color="#000">
          {data.title}
        </Typography>
      </Box>

      {/* Content */}
      <Box>
        {data.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.8)', 
              px: 3,
              py: 1.5,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography color="#000">{item.name}</Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default YearsCard;
