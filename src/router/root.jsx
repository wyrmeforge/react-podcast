import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../containers/AppLayout.jsx';
import HomePage from '../containers/HomePage/HomePage.jsx';
import * as routerPaths from '../consts/router/routerPaths.js';
import AboutPage from '../containers/AboutPage/AboutPage.jsx';
import NotFound from '../pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routerPaths.ABOUT_PAGE,
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
