import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from './podcast/podcastsSlice.js';

export const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
  },
});
