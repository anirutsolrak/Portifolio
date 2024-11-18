import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

const ProjectsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (category) => {
    navigate(`/perfil/projetos/${category}`);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        aria-haspopup="true"
        aria-controls="project-menu"
        aria-label="Ver Projetos"
        onClick={handleClick}
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
        startIcon={<KeyboardArrowUpIcon />}
      >
        Ver Projetos
      </Button>
      <Menu
        id="project-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
    </>
  );
};

export default ProjectsMenu;