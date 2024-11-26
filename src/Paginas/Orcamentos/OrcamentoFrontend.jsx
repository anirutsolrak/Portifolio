import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormularioContato from '../../components/Formulario';

const OrcamentoFrontend = () => {
  const beneficios = [
    'Interfaces modernas e responsivas',
    'Performance otimizada',
    'SEO amigável',
    'Compatibilidade cross-browser',
    'Código limpo e manutenível',
    'Integração com APIs'
  ];

  const handleFormSuccess = () => {
    console.log('Formulário enviado com sucesso!');
  };

  const handleFormError = (error) => {
    console.error('Erro ao enviar formulário:', error);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Desenvolvimento Front-end
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Paper sx={{ flex: 1, p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Benefícios
            </Typography>
            <List>
              {beneficios.map((beneficio, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={beneficio} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom align="center">
              Solicite um Orçamento
            </Typography>
            <FormularioContato
              onSuccess={handleFormSuccess}
              onError={handleFormError}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OrcamentoFrontend;