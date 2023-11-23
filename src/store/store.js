import { configureStore } from '@reduxjs/toolkit';
import podcastSlice from './podcast/podcastsSlice.js';
import reviewsSlice from './reviews/reviewsSlice.js';
import tagsSlice from './tags/tagsSlice.js';

export const store = configureStore({
  reducer: {
    podcasts: podcastSlice,
    reviews: reviewsSlice,
    tags: tagsSlice,
  },
});
