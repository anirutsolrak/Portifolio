import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../public/logo.jpg'; 

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e3f2fd', height: 80 }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Logo"
            style={{ height: '80px', marginRight: '1rem', opacity:'0.8' }} 
          />
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              marginRight: 'auto',
            }}
          >
            DESENVOLVEDOR FRONT-END
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginRight: '1rem' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: '#1976d2', textTransform: 'none' }}
          >
            HOME
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/artigos"
            sx={{ color: '#1976d2', textTransform: 'none' }}
          >
            ARTIGOS
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projetos"
            sx={{ color: '#1976d2', textTransform: 'none' }}
          >
            PROJETOS
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/sobre"
            sx={{ color: '#1976d2', textTransform: 'none' }} 
          >
            SOBRE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;