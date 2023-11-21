import { createSelector } from 'reselect';

const selectPodcasts = (state) => state.podcasts.podcasts;

export const selectAllPodcasts = createSelector(selectPodcasts, (data) => data);

export const makeSelectPodcastById = (podcastId) =>
  createSelector([selectPodcasts], (podcasts) => podcasts.find((item) => +item.id === +podcastId));
