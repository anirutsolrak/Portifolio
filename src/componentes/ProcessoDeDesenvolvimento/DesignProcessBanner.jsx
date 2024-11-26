import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import Photo from '../../assets/Photo.svg';

const DesignProcessBanner = () => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Diagonal Background */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80vh',
            backgroundColor: 'rgba(21, 53, 71, 0.9)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80vh',
            backgroundColor: 'rgba(100, 108, 200)',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
            zIndex: 1,
          }
        }}
      >
        <Container sx={{ 
          position: 'relative', 
          zIndex: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100%', 
          py: 8 
        }}>
          <Grid2 container spacing={4} alignItems="center" justifyContent="center" >
            <Grid2 xs={12} md={6}>
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <img
                  src={Photo}
                  alt="Carlos Eduardo Turina"
                  style={{
                    width: '100%', // Ocupa todo o espaço disponível no container
                    height: 'auto', // Mantém a proporção da imagem
                    borderRadius: '50%',
                    marginBottom: '2rem',
                    minWidth: '300px', // Tamanho mínimo da imagem
                  }}
                />
              </Box>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Carlos Eduardo Turina
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  fontSize: '2rem',
                  textAlign: 'center',
                  
                  
                }}
              >
                Desenvolvedor Front-End
              </Typography>
              <Typography variant='subtitle1'  sx={{
                  color: 'white',
                  textAlign: 'center',
                  mb: '2rem',
                  
                }}
              >Criando experiências digitais que transformam negócios.</Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  maxWidth: '600px',
                  textAlign: 'center',
                }}
              >
                Especialista em criar soluções web inovadoras com React e IA,
              </Typography>
              <Typography variant='h5'  sx={{
                  color: '#fff',
                  mb: 4,
                  maxWidth: '600px',
                  textAlign: 'center',
                }}
              > que impulsionam o crescimento do seu negócio.</Typography>
                     <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'rgba(21, 53, 71)',
                  color: '#fff',
                  borderRadius: '30px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)', // Adiciona uma sombra para destacar o botão
                  px: 4,
                  py: 1.5,

                  mt: 5,
                  '&:hover': {
                    backgroundColor: '#4B50FF',
                    
                  }
                }}
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
Solicitar Orçamento              </Button>
            
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};

export default DesignProcessBanner;
