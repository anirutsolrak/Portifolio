import React from 'react';
import { Box, styled } from '@mui/material';
import ProcessStep from './ProcessStep';

const CircleContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '45vw',
  height: '45vw',
  maxWidth: '700px',
  maxHeight: '700px',
  minWidth: '500px',
  minHeight: '500px',
  borderRadius: '50%',
  border: `8px solid rgba(128, 128, 128, 0.2)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '50%',
    border: `8px solid rgba(128, 128, 128, 0.1)`,
  },
}));

const ProcessCircle = ({ steps, activeStep, onStepClick }) => {
  const calculateStepPosition = (index) => {  // Changed to accept index
    const radius = 48;
    const angle = index * 60; // Calculate angle based on index * 60
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return {
      top: `${50 + y}%`,
      left: `${50 + x}%`,
      transform: 'translate(-45%, -50%)',
    };
  };

  /*   Removido a mensagem dos steps circulares 
    const calculateDescriptionPosition = (index) => { // Changed to accept index
        const radius = 55; 
        const angle = index * 60; // Calculate angle based on index * 60
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        return {
            top: `${50 + y}%`,
            left: `${50 + x}%`,
            transform: 'translate(-50%, -50%)',
        };
    };
*/

  return (
    <CircleContainer>
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          step={step}
          index={index}
          isActive={activeStep === index}
          onClick={onStepClick}
          position={calculateStepPosition(index)} // Pass index
         // descriptionPosition={calculateDescriptionPosition(index)} // Pass index
        />
      ))}
    </CircleContainer>
  );
};

export default ProcessCircle;