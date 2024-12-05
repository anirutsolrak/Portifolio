import React from 'react';
import { Box } from '@mui/material';

const NetworkEffect = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        background: `
          radial-gradient(circle at 20% 30%, rgba(63, 81, 181, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(63, 81, 181, 0.15) 0%, transparent 50%)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='14.8609' y1='78.5605' x2='5.27513' y2='37.8202' stroke='%233f51b5' stroke-opacity='0.2'/%3E%3Cline x1='85.4434' y1='7.76188' x2='43.6575' y2='33.4028' stroke='%233f51b5' stroke-opacity='0.2'/%3E%3Ccircle cx='26' cy='13' r='2' fill='%233f51b5' fill-opacity='0.3'/%3E%3Ccircle cx='74' cy='87' r='2' fill='%233f51b5' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          backgroundRepeat: 'repeat',
          animation: 'pulse 3s infinite',
        },
        '@keyframes pulse': {
          '0%': { opacity: 0.4 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 0.4 },
        }
      }}
    />
  );
};

export default NetworkEffect;