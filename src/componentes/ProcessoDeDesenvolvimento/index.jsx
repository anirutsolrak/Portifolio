import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, styled } from '@mui/material';
import ProcessCircle from './ProcessCircle';

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

const ProcessContent = styled(Box)({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
  position: 'relative',
  padding: '0 2rem',
});

const ProcessDescription = styled(Box)({
  flex: '0 0 300px',
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 20,
});

const CircleWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

const steps = [
  {
    name: 'Levantamento de Requisitos',
    angle: -15,
    description: 'Entender as necessidades e objetivos do cliente através de entrevistas, análise de mercado e documentação.',
  },
  {
    name: 'Prototipagem',
    angle: 60,
    description: 'Criar protótipos de alta fidelidade para visualizar e testar a solução com o cliente.',
  },
  {
    name: 'Desenvolvimento Front/Back-End',
    angle: 135,
    description: 'Desenvolver a interface do usuário com React e a lógica back-end, se necessário.',
  },
  {
    name: 'Testes',
    angle: 210,
    description: 'Realizar testes de usabilidade para garantir a qualidade da solução.',
  },
  {
    name: 'Implementação',
    angle: 270,
    description: 'Implementar a solução em ambiente de produção.',
  },
  {
    name: 'Manutenção',
    angle: -90,
    description: 'Fornecer suporte contínuo, coletar feedback e realizar melhorias.',
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <ProcessSection ref={sectionRef}>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? '0' : '-20px'})`,
          transition: 'all 0.6s ease-out',
          marginBottom: '3rem',
        }}
      >
        Processo de Desenvolvimento
      </Typography>
      
      <ProcessContent>
        <ProcessDescription
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: `translateX(${isVisible ? '0' : '-20px'})`,
            transition: 'all 0.6s ease-out',
          }}
        >
          <Typography variant="body1">
            Este é o processo que sigo para garantir a criação de soluções web
            eficazes e centradas no usuário, desde o levantamento inicial de
            requisitos até a manutenção contínua.
          </Typography>
        </ProcessDescription>

        <CircleWrapper
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: `translateX(${isVisible ? '0' : '20px'})`,
            transition: 'all 0.6s ease-out',
          }}
        >
          <ProcessCircle
            steps={steps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
          />
        </CircleWrapper>
      </ProcessContent>
    </ProcessSection>
  );
};

export default DesignProcess;