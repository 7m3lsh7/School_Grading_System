import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

interface LevelCardProps {
  number: number;
  title: string;
  subject?: string;
  description: string;
  code?: string;
}

const LevelCard: React.FC<LevelCardProps> = ({
  number,
  title,
  subject = "",
  description,
  code = "",
}) => {
  return (
    <Paper
      elevation={6}
      sx={{
        width: '100%',
        maxWidth: '504px',        // مقاس Figma
        minHeight: '270px',       // مقاس Figma
        p: { xs: 3, md: 3.5 },
        borderRadius: 3,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            backgroundColor: '#f4b400',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '22px',
            color: '#000',
            flexShrink: 0,
          }}
        >
          {number}
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold" color="#000">
            {title}
          </Typography>
          {subject && (
            <Typography variant="body2" color="text.secondary">
              {subject}
            </Typography>
          )}
        </Box>
      </Box>

      <Divider sx={{ my: 2.5 }} />

      {/* Description */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#555', 
          flexGrow: 1,
          lineHeight: 1.7 
        }}
      >
        {description}
      </Typography>

      <Divider sx={{ my: 2.5 }} />

      {/* Code */}
      {code && (
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontWeight: 500,
          }}
        >
          {code}
        </Typography>
      )}
    </Paper>
  );
};

export default LevelCard;