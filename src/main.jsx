import React from 'react';
import ReactDOM from 'react-dom/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/index.sass';
import { RouterProvider } from 'react-router-dom';
import router from './router/root.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
