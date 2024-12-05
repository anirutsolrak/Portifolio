import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, styled, Grid2 } from '@mui/material';
import ProcessCircle from './ProcessCircle';
import { useInView } from 'react-intersection-observer';

const ProcessSection = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#fff',
  padding: '4rem 2rem',
  gap: '2rem',
  overflow: 'hidden',
});

const RoadmapContainer = styled(Grid2)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around', // Distribute space between roadmap and circle
  alignItems: 'center',  // Vertically center items
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 2rem',
}));

const MilestoneList = styled(Grid2)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}));

const MilestoneContainer = styled(Box)({
  position: 'relative', // Estabelece um contexto de posicionamento para a descrição
});

const Milestone = styled(Box)(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&::before': {
    content: '""',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: active === "true" ? theme.palette.primary.main : 'grey',
  },
}));

const MilestoneDescription = styled(Box)(({ theme }) => ({
  position: 'absolute', // Posiciona a descrição em relação ao contêiner
  bottom: '100%', // Posiciona a descrição acima do milestone
  left: 0,
  padding: '1rem',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: '100%',
  wordWrap: 'break-word',
  opacity: 0, // Inicialmente invisível
  transition: 'opacity 0.3s ease',
}));

const steps = [
  {
    name: 'Levantamento de Requisitos',
    description: 'Entender as necessidades e objetivos do cliente através de entrevistas, análise de mercado e documentação.',
  },
  {
    name: 'Prototipagem',
    description: 'Criar protótipos de alta fidelidade para visualizar e testar a solução com o cliente.',
  },
  {
    name: 'Desenvolvimento Front/Back-End',
    description: 'Desenvolver a interface do usuário com React e a lógica back-end, se necessário.',
  },
  {
    name: 'Testes',
    description: 'Realizar testes de usabilidade para garantir a qualidade da solução.',
  },
  {
    name: 'Implementação',
    description: 'Implementar a solução em ambiente de produção.',
  },
  {
    name: 'Manutenção',
    description: 'Fornecer suporte contínuo, coletar feedback e realizar melhorias.',
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
  });

  const handleStepClick = (index) => {
    setActiveStep((prevActiveStep) => (prevActiveStep === index ? null : index));
  };

  return (
    <ProcessSection ref={sectionRef} style={{ opacity: sectionInView ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          transform: `translateY(${sectionInView ? '0' : '-20px'})`,
          transition: 'all 0.6s ease-out',
          marginBottom: '3rem',
        }}
      >
        Processo de Desenvolvimento
      </Typography>

      <RoadmapContainer container spacing={4}>
        <Grid2 xs={12} md={6}>
          <MilestoneList>
            {steps.map((step, index) => (
              <MilestoneContainer key={index} sx={{ width: '100%' }}>
                <Milestone
                  active={activeStep === index ? "true" : "false"}
                  onClick={() => handleStepClick(index)}
                >
                  <Typography variant="h6">{step.name}</Typography>
                </Milestone>
                {activeStep === index && (
                  <MilestoneDescription
                    style={{ opacity: sectionInView ? 1 : 0 }}
                  >
                    <Typography variant="body2">{step.description}</Typography>
                  </MilestoneDescription>
                )}
              </MilestoneContainer>
            ))}
          </MilestoneList>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <ProcessCircle
            steps={steps}
            style={{ opacity: sectionInView ? 1 : 0 }}
          />
        </Grid2>
      </RoadmapContainer>
    </ProcessSection>
  );
};

export default DesignProcess;
