import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, action) {
      state.tags = action.payload;
    },
  },
});

export const { setTags } = tagsSlice.actions;

export default tagsSlice.reducer;
