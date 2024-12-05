import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../componentes/Layout';
import DetalhesProjeto from '../paginas/DetalhesProjeto';
import Artigos from '../paginas/Artigos';
import Sobre from '../paginas/Sobre';
import Introducao from '../paginas/Introducao';
import Perfil from '../paginas/Perfil';
import AplicacoesProjetos from '../paginas/AplicacoesProjetos';
import AIProjetos from '../paginas/AIProjetos';
import WebsitesProjetos from '../paginas/WebsitesProjetos';
import OrcamentoFrontend from '../paginas/Orcamentos/OrcamentoFrontend';
import OrcamentoIA from '../paginas/Orcamentos/OrcamentoIA';
import OrcamentoUIUX from '../paginas/Orcamentos/OrcamentoUIUX';

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
        path: 'orcamento/frontend',
        element: <OrcamentoFrontend />,
      },
      {
        path: 'orcamento/ia',
        element: <OrcamentoIA />,
      },
      {
        path: 'orcamento/uiux',
        element: <OrcamentoUIUX />,
      },
      {
        index: true,
        element: <Perfil />,
      },
      {
        path: 'project/:id',
        element: <DetalhesProjeto />,
      },
      {
        path: 'articles',
        element: <Artigos />,
      },
      {
        path: 'about',
        element: <Sobre />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);