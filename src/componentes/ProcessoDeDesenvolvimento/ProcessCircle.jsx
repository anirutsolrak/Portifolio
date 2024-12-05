import React from 'react';
import { Box, styled } from '@mui/material';
import ProcessStep from './ProcessStep';

const CircleContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '35vw', // Diminui o tamanho do círculo aqui
  height: '35vw', // Diminui o tamanho do círculo aqui
  maxWidth: '500px', // Diminui o tamanho máximo do círculo aqui
  maxHeight: '500px', // Diminui o tamanho máximo do círculo aqui
  minWidth: '300px', // Ajusta o tamanho mínimo do círculo aqui
  minHeight: '300px', // Ajusta o tamanho mínimo do círculo aqui
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

const ProcessCircle = ({ steps }) => {
  const calculateStepPosition = (index) => {
    // Cada passo ocupa um ângulo de 360 / número de passos
    const angleIncrement = 360 / steps.length;
    // O ângulo inicial é 0 para que o primeiro passo esteja no topo
    const angle = (index * angleIncrement) + 90; // Subtraimos 90 para iniciar no topo
    const radians = (angle * Math.PI) / 180;
    const radius = 50; // Raio ajustado conforme necessário
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return {
      top: `${50 - y}%`, // Inverti o sinal para que o topo seja 0%
      left: `${50 + x}%`,
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <CircleContainer>
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          step={step}
          position={calculateStepPosition(index)}
        />
      ))}
    </CircleContainer>
  );
};

export default ProcessCircle;