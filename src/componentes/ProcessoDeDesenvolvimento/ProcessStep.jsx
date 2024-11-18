import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StepButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.primary.main,
  color: 'white',
  padding: '12px 24px',
  borderRadius: '20px',
  minWidth: '120px',
  textAlign: 'center',
  boxShadow: theme.shadows[2],
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  zIndex: 20,
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.1) !important',
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
  },
}));

const StepDescription = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 30,
  maxWidth: '250px',
  transition: 'all 0.3s ease',
}));

export const ProcessStep = ({ step, index, isActive, onClick, position, descriptionPosition }) => (
  <React.Fragment>
    <StepButton
      onClick={() => onClick(index)}
      sx={{
        ...position,
        fontSize: '0.9rem',
      }}
    >
      {step.name}
    </StepButton>
    {isActive && (
      <StepDescription sx={descriptionPosition}>
        <Typography variant="body2">
          {step.description}
        </Typography>
      </StepDescription>
    )}
  </React.Fragment>
);

export default ProcessStep;