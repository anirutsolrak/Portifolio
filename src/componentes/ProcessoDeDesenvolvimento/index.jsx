import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, styled, Grid2 } from '@mui/material';
import ProcessCircle from './ProcessCircle'; // Import the circular component



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
    justifyContent: 'space-between', // Distribute space between roadmap and circle
    alignItems: 'center',  // Vertically center items
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
}));


const MilestoneList = styled(Grid2)(({ theme }) => ({ // Use Grid2 for the milestones
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
}));

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
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '100%', // Changed to 100%
    wordWrap: 'break-word',
}));


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

        <RoadmapContainer container spacing={4}> {/* Use Grid2 container */}
                <Grid2 xs={12} md={6}> {/* Adjust xs and md as needed */}
                    <MilestoneList>
                        {steps.map((step, index) => (
                            <Box key={index} sx={{ width: '100%' }}>
                               <Milestone active={activeStep === index ? "true" : "false"} onClick={() => handleStepClick(index)}>
                                    <Typography variant="h6">{step.name}</Typography>
                                </Milestone>
                                {activeStep === index && (
                                    <MilestoneDescription>
                                        <Typography variant="body2">{step.description}</Typography>
                                    </MilestoneDescription>
                                )}
                            </Box>
                        ))}
                    </MilestoneList>
                </Grid2>
                <Grid2 xs={12} md={6}> {/* Space for the circle */}
                    <ProcessCircle
                        steps={steps}
                    />
                </Grid2>
            </RoadmapContainer>

        </ProcessSection>
    );
};

export default DesignProcess;