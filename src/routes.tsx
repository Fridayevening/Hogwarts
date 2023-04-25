import { createBrowserRouter } from 'react-router-dom';

import PageGryffindor from './pages/gryffindor';
import PageHufflepuff from './pages/hufflepuff';
import PageIndex from './pages/index';
import PageRavenclaw from './pages/ravenclaw';
import PageSlytherin from './pages/slytherin';

const router = createBrowserRouter([
  {
    path: '/gryffindor',
    element: <PageGryffindor />,
  },
  {
    path: '/hufflepuff',
    element: <PageHufflepuff />,
  },
  {
    path: '/ravenclaw',
    element: <PageRavenclaw />,
  },
  {
    path: '/slytherin',
    element: <PageSlytherin />,
  },
  {
    path: '/',
    element: <PageIndex />,
  },
]);

export default router;
