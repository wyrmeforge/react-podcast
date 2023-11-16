import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../containers/AppLayout.jsx';
import HomePage from '../containers/HomePage/HomePage.jsx';
import * as routerPaths from '../consts/router/routerPaths.js';
import AboutPage from '../containers/AboutPage/AboutPage.jsx';
import NotFound from '../containers/NotFound.jsx';
import PodcastDetailPage from '../containers/PodcastDetailPage/PodcastDetailPage.jsx';

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
      {
        path: routerPaths.PODCAST_DETAILS,
        element: <PodcastDetailPage />,
      },
      {
        path: routerPaths.PODCAST_DETAILS_PARAMETRIZED,
        element: <PodcastDetailPage />,
      },
      {
        path: routerPaths.FEATURE,
        element: <HomePage />,
      },
      {
        path: routerPaths.PRICING,
        element: <HomePage />,
      },
      {
        path: routerPaths.TESTIMONIALS,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
