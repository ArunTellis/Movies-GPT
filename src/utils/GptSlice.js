import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    showGptMovieNames: null,
    showGptMovieResults: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.showGptMovieNames = movieNames;
      state.showGptMovieResults = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovieResults } = GptSlice.actions;
export default GptSlice.reducer;
