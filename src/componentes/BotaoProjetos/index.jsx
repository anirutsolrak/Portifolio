import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

const BotaoProjetos = ({ menuItems, buttonText = 'Ver Projetos', buttonStyle, menuPosition }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  const defaultButtonStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(21, 53, 71)',
    color: '#fff',
    borderRadius: '30px',
    zIndex: 30,
    border: '3px solid white',
    px: 4,
    py: 1.5,
    '&:hover': {
      backgroundColor: '#4B50FF',
    },
  };

  const mergedButtonStyle = { ...defaultButtonStyle, ...buttonStyle };

  const defaultMenuPosition = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    }
  };

  const mergedMenuPosition = { ...defaultMenuPosition, ...menuPosition };

  return (
    <>
      <Button
        variant="contained"
        aria-haspopup="true"
        aria-controls="project-menu"
        aria-label="Ver Projetos"
        onClick={handleClick}
        startIcon={<KeyboardArrowUpIcon />}
        sx={mergedButtonStyle}
      >
        {buttonText}
      </Button>
      <Menu
        id="project-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...mergedMenuPosition}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.path} onClick={() => handleMenuItemClick(item.path)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default BotaoProjetos;