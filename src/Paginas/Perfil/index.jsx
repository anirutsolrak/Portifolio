import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from '@mui/material';
import ProcessoDeDesenvolvimento from '../../componentes/ProcessoDeDesenvolvimento';
import DesignProcessBanner from '../../componentes/ProcessoDeDesenvolvimento/DesignProcessBanner';


const Perfil = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: 'Desenvolvimento Front-end',
      description: 'Criação de interfaces modernas e responsivas com React, focando em performance e experiência do usuário.',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Material-UI']
    },
    {
      title: 'Integração com IA',
      description: 'Desenvolvimento de soluções web inteligentes utilizando APIs de IA para criar experiências personalizadas.',
      skills: ['OpenAI API', 'NLP', 'Automação', 'Integração API']
    },
    {
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e atraentes, com foco na experiência do usuário e conversão.',
      skills: ['Figma', 'Prototipagem', 'Design System', 'Wireframing']
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Diagonal Background */}
      <DesignProcessBanner></DesignProcessBanner>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, backgroundColor: '#fff' }}> {/* Ajuste na distância entre os containers */}
        <Container maxWidth="md" sx={{ mb: 4 }}> {/* Ajuste na distância entre os containers */}
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 4,
              color: '#153547',
              fontWeight: 600
            }}
          >
            Serviços
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Grid2 container spacing={3}> {/* Ajuste no espaçamento entre os cards */}
            {services.map((service, index) => (
              <Grid2  xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    maxWidth: 360, // Aumento na largura dos cards
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ 
                        color: '#153547',
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3,
                        color: '#666'
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.skills.map((skill, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            bgcolor: '#646CFF',
                            color: 'white',
                            px: 2,
                            py: 0.5,
                            borderRadius: '15px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}> {/* Ajuste na distância entre os containers */}
        <ProcessoDeDesenvolvimento />
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: '#fff' }}> {/* Ajuste na distância entre os containers */}
        <Container>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 6,
              color: '#153547',
              fontWeight: 600
            }}
          >
            Sobre Mim
          </Typography>
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2  xs={12} md={8}>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Desde 2023, tenho me dedicado ao desenvolvimento web, construindo uma carreira sólida e focada em entregar soluções inovadoras. Comecei minha jornada com JavaScript puro e CSS, e ao longo do tempo, aprimorei minhas habilidades em JavaScript, React e Ferramentas de IAs.
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Sou apaixonado por Inteligência Artificial e suas aplicações no desenvolvimento web. Acredito que a IA tem um potencial enorme para revolucionar a forma como criamos e interagimos com as soluções digitais.
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};

export default Perfil;
