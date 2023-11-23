import { createSelector } from 'reselect';

const selectTags = (state) => state.tags.tags;

export const selectAllTags = createSelector(selectTags, (data) => data);
