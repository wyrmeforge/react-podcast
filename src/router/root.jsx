import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../containers/AppLayout.jsx';
import HomePage from '../containers/HomePage/HomePage.jsx';
import * as routerPaths from '../consts/routerPaths.js';
import AboutPage from '../containers/AboutPage/AboutPage.jsx';
import NotFound from '../containers/NotFound.jsx';
import EpisodesPage from '../containers/EpisodesPage/EpisodesPage.jsx';

const commonElementRoutes = [
  routerPaths.FEATURE,
  routerPaths.PRICING,
  routerPaths.TESTIMONIALS,
  routerPaths.RECENT_EPISODES,
];

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routerPaths.ABOUT_PAGE, element: <AboutPage /> },
      { path: routerPaths.EPISODES, element: <EpisodesPage /> },
      { path: routerPaths.EPISODES_PARAMETRIZED, element: <EpisodesPage /> },
      ...commonElementRoutes.map((path) => ({ path, element: <HomePage /> })),
    ],
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter(routes, {
  basename: '/react-podcast',
});

export default router;
