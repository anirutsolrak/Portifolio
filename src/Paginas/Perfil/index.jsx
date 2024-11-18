import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
  Button,
  Backdrop,
  Fade,
  Card,
  CardContent,
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProcessoDeDesenvolvimento from '../../componentes/ProcessoDeDesenvolvimento';
import Photo from '../../assets/Photo.svg';
import { useNavigate } from 'react-router-dom';



const Perfil = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null); // Estado para controlar o menu

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (category) => {
    navigate(`/perfil/projetos/${category}`);
    handleCloseMenu(); // Fecha o menu após o clique
  };



  
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

  const handleVerProjetosClick = (category) => {
    navigate(`/perfil/projetos/${category}`);
    handleModalClose();
  };



  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Diagonal Background */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#153547',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#646CFF',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
            zIndex: 1,
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2, py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <img
                  src={Photo}
                  alt="Carlos Eduardo Turina"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '50%',
                    marginBottom: '2rem',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Carlos Eduardo Turina
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: 'black',
                  fontSize: isMobile ? '1.8rem' : '3.5rem',
                  mb: 3
                }}
              >
                Desenvolvedor Front-End
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  mb: 4,
                  maxWidth: '600px'
                }}
              >
                Especialista em criar experiências web inovadoras com React e IA
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#646CFF',
                  color: '#fff',
                  borderRadius: '30px',
                  border: '3px solid white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#4B50FF'
                  }
                }}
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Serviços
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Menu para Ver Projetos */}
      <Button
        variant="contained"
        aria-haspopup="true"
        aria-controls="project-menu"
        aria-label="Ver Projetos"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#646CFF',
          color: '#fff',
          borderRadius: '30px',
          zIndex: '30',
          border: '3px solid white',
          px: 4,
          py: 1.5,
          '&:hover': {
            backgroundColor: '#4B50FF'
          }
        }}
        startIcon={<KeyboardArrowUpIcon />}
      >
        Ver Projetos
      </Button>
      <Menu
        id="project-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('websites')}>Websites</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('aplicacoes')}>Aplicações</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('projetos-com-ia')}>Projetos com IA</MenuItem>
      </Menu>

      {/* Services Section */}
      <Box id="services" sx={{ py: 12, backgroundColor: '#fff' }}>
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
            Serviços
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 12, backgroundColor: '#f8f9fa' }}>
        <ProcessoDeDesenvolvimento />
      </Box>

      {/* About Section */}
      <Box sx={{ py: 12, backgroundColor: '#fff' }}>
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
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}
              >
                Desde 2023, tenho me dedicado ao desenvolvimento web, construindo uma carreira sólida e focada em entregar soluções inovadoras. Comecei minha jornada com JavaScript puro e CSS, e ao longo tempo, aprimorei minhas habilidades em JavaScript, React e Ferramentas de IAs.
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Perfil;