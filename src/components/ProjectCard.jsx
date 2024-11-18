import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(`/perfil/project/${project.id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out', // Adicione uma transição suave
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter} // Adicione o evento onMouseEnter
      onMouseLeave={handleMouseLeave} // Adicione o evento onMouseLeave
    >
      <CardMedia
        sx={{
          height: 100, // Altura fixa. Ajuste conforme necessário
          backgroundImage: `url(${project.thumbnail})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: isHovered ? 'top -45px' : 'top', // Ajuste o valor -45px para controlar a rolagem
          transition: 'background-position 0.5s ease-in-out',
        }}
      />
      <CardContent
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h6" component="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: '#646CFF',
                color: 'white',
              }}
            />
          ))}
        </Box>
        <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate(`/project/${project.id}`)}
            sx={{
              backgroundColor: '#646CFF',
              '&:hover': {
                backgroundColor: '#4B50FF',
              },
            }}
          >
            Ver Detalhes
          </Button>
          <Button
            variant="outlined"
            href={project.liveUrl}
            target="_blank"
            sx={{
              borderColor: '#646CFF',
              color: '#646CFF',
              '&:hover': {
                borderColor: '#4B50FF',
                backgroundColor: 'rgba(100, 108, 255, 0.08)',
              },
            }}
          >
            Ver Live
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
