import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LineData } from '../../types/HeaderTitle';

interface Props {
  lines: LineData[];
}

const ThreeLines: React.FC<Props> = ({ lines }) => {
  const getTextColor = (color: LineData['color']) => {
    switch (color) {
      case 'yellow':
        return 'rgba(255, 214, 0, 0.8)';
      case 'white':
        return '#ffffff';
      case 'gray':
        return '#9e9e9e';
      default:
        return '#ffffff';
    }
  };

  const getFontSize = (color: LineData['color']) =>
    color === 'gray' ? '0.8rem' : '0.95rem';

  return (
    <Box>
      {lines.map((line) => (
        <Box
          key={line.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: line.id === 1 ? 0 : 0.5,
            cursor: line.icon ? 'pointer' : 'default',
          }}
        >
          {line.icon && (
            <ArrowBackIcon
              sx={{
                mr: 1,
                color: getTextColor(line.color),
              }}
            />
          )}

          <Typography
            fontSize={getFontSize(line.color)}
            fontWeight={line.id === 2 ? 600 : 400}
            sx={{ color: getTextColor(line.color) }}
          >
            {line.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ThreeLines;
