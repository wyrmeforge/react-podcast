import React from 'react';
import ReactDOM from 'react-dom/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/index.sass';
import { RouterProvider } from 'react-router-dom';
import router from './router/root.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ApolloProvider>,
);
