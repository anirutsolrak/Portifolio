import React from 'react';
import { Box, Container, Typography, Button, Avatar } from '@mui/material';
import ScreenshotMonitorTwoToneIcon from '@mui/icons-material/ScreenshotMonitorTwoTone';
import Photo from '../../assets/Photo.svg';

const DesignProcessBanner = () => {
  return (
    <Box disableGutters sx={{ bgcolor: '#a3a3a3', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='14.8609' y1='78.5605' x2='5.27513' y2='37.8202' stroke='white' stroke-opacity='0.9'/%3E%3Cline x1='85.4434' y1='7.76188' x2='43.6575' y2='33.4028' stroke='white' stroke-opacity='0.9'/%3E%3Ccircle cx='26' cy='13' r='2' fill='white'/%3E%3Ccircle cx='74' cy='87' r='2' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          backgroundRepeat: 'repeat',
          zIndex: 0,
          opacity: 0.2,
        }}
      />
      <Container sx={{minWidth: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start',  }}>
        <Box sx={{ marginTop: '35px'}}>
            <Avatar
            disableGutters
              src={Photo}
              alt="Carlos Eduardo Turina"
              sx={{
                width: 250,
                height: 250,
                boxShadow: '0 6px 8px rgba(255,255,255,0.8)'
              }}
            />
            </Box>
         <Box disableGutters sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', ml: '30px', py: '30px'}}>
              <Typography  variant="h1" component="h1" sx={{
                color: '#1e3a8a',
                fontWeight: 500,
                fontSize: { xs: '1rem', md: '2rem' },
              }}>
                Especialista em criar soluções web inovadoras com React e IA, que impulsionam o crescimento do seu negócio.
              </Typography>
            
                <ScreenshotMonitorTwoToneIcon
                disableGutters
                  sx={{
                    fontSize: 150,
                    color: '#1e3a8a',

                  }}
                />
                <Typography
                disableGutters
                  variant="h6"
                  sx={{
                    color: '#1e3a8a',
                    fontWeight: 500
                  }}
                >
                  Criando experiências digitais que transformam negócios.
                </Typography>
                <Button
                disableGutters
                  variant="contained"
                  size="large"
                  sx={{
                    px: 6,
                    bgcolor: '#1e3a8a',
                    '&:hover': {
                      bgcolor: '#1e40af'
                    },
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Contato
                </Button>
                </Box>
      </Container>
    </Box>
  );
};

export default DesignProcessBanner;