import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo: null,
    movieLogo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addMovieLogo: (state, action) => {
      state.movieLogo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addMovieLogo } =
  movieSlice.actions;

export default movieSlice.reducer;
