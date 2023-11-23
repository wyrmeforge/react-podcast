import { createSelector } from 'reselect';

const selectReviews = (state) => state.reviews.reviews;

export const selectAllReviews = createSelector(selectReviews, (data) => data);

export const makeSelectReviewById = (reviewId) =>
  createSelector([selectReviews], (reviews) => reviews.find((item) => +item.id === +reviewId));
