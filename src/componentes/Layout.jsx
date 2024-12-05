import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import BotaoProjetos from './BotaoProjetos';

const Layout = () => {
  const menuItems = [
    { label: 'Websites', path: '/perfil/projetos/websites' },
    { label: 'Aplicações', path: '/perfil/projetos/aplicacoes' },
    { label: 'Projetos com IA', path: '/perfil/projetos/projetos-com-ia' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', minWidth: '98.7vw', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <BotaoProjetos menuItems={menuItems} />
    </Box>
  );
};

export default Layout;