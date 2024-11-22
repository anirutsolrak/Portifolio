import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const StepButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.primary.main,
  color: 'white',
  padding: '0.5rem 1rem', // Reduzido o padding para diminuir o tamanho do botão
  borderRadius: '15px',
  width: '7rem', // Reduzido a largura do botão
  textAlign: 'center',
  boxShadow: theme.shadows[2],
  wordWrap: 'break-word', // Permitir quebra de linha para palavras longas
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  zIndex: 20,
  transform: 'translate(-50%, -50%)',
  fontSize: '0.63rem', // Reduzido o tamanho da fonte
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.1) !important',
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
  },
}));

const StepDescription = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '0.5rem 1rem', // Reduzido o padding para diminuir o tamanho da descrição
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 30,
  maxWidth: '70vw', // Reduzido o max-width para melhor se adequar a telas menores
  wordWrap: 'break-word', // Permitir quebra de linha para palavras longas
  textAlign: 'center', // Centralizar o texto
  transition: 'all 0.3s ease',
  fontSize: '0.3rem', // Reduzido o tamanho da fonte
}));

export const ProcessStep = ({ step, index, isActive, position }) => (
  <React.Fragment>
    <StepButton
      sx={{
        ...position,
      }}
    >
      {step.name}
    </StepButton>
    {isActive && (
      <StepDescription
        sx={{
          top: '120%', // Ajustado para posicionar a descrição abaixo do botão
          left: '50%',

        }}
      >
        <Typography variant="body2">
          {step.description}
        </Typography>
      </StepDescription>
    )}
  </React.Fragment>
);

export default ProcessStep;
