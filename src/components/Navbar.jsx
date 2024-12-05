import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => navigate('/perfil')} // Adiciona /perfil
            sx={{ color: '#153547' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/perfil/articles')} // Adiciona /perfil
            sx={{ color: '#153547' }}
          >
            Artigos
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/perfil/about')} // Adiciona /perfil
            sx={{ color: '#153547' }}
          >
            Sobre
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;