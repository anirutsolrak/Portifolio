import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';
import Articles from '../pages/Articles';
import About from '../pages/About';
import Introducao from '../Paginas/Introducao'; // Importe o componente Introducao
import AplicacoesProjetos from '../pages/AplicacoesProjetos';
import AIProjetos from '../pages/AIProjetos';
import WebsitesProjetos from '../pages/WebsitesProjetos';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Introducao />,
  },
  {
    path: '/perfil',
    element: <Layout />,
    children: [

      {
        path: 'projetos/websites', 
        element: <WebsitesProjetos />,
      },
       {
        path: 'projetos/aplicacoes', 
        element: <AplicacoesProjetos />,
      },
       {
        path: 'projetos/projetos-com-ia', 
        element: <AIProjetos />,
      },

      {
        index: true,
        element: <Home />,
      },
      {
        path: 'project/:id',
        element: <ProjectDetails />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },

]);