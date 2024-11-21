import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StepButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.primary.main,
  color: 'white',
  padding: '1rem', // Increased padding for better spacing
  borderRadius: '20px',
  width: '9.5rem',    // Dynamic max-width
  textAlign: 'center',
  boxShadow: theme.shadows[2],
  wordWrap: 'break-word', // Allow long words to break
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  zIndex: 20,
  transform: 'translate(-50%, -50%)',
  '&:hover': {
      transform: 'translate(-50%, -50%) scale(1.1) !important',
      background: theme.palette.primary.dark,
      boxShadow: theme.shadows[4],
  },
}));

const StepDescription = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '1rem',  // Increased padding
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 30,
  maxWidth: '80vw', // Dynamic max-width to fit smaller screens
  wordWrap: 'break-word', // Allow long words to break
  textAlign: 'center',  // Centered text
  transition: 'all 0.3s ease',
}));

export const ProcessStep = ({ step, index, isActive, position, descriptionPosition }) => (
  <React.Fragment>
      <StepButton
          sx={{
              ...position,
              fontSize: '0.9rem',

          }}
      >
          {step.name}
      </StepButton>
      {isActive && (
          <StepDescription sx={descriptionPosition}>
              <Typography variant="body2" > {/* Center the description text */}
                  {step.description}
              </Typography>
          </StepDescription>
      )}
  </React.Fragment>
);

export default ProcessStep;