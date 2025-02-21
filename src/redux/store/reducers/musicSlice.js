import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk("music/fetchSongs", async (artistName) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
  const data = await response.json();
  return { artistName, songs: data.data.slice(0, 4) };
});

const musicSlice = createSlice({
  name: "music",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        const { artistName } = action.meta.arg;
        state[artistName] = {
          ...state[artistName],
          status: "loading",
        };
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        const { artistName, songs } = action.payload;
        state[artistName] = {
          songs,
          status: "success",
        };
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        const { artistName } = action.meta.arg;
        state[artistName] = {
          ...state[artistName],
          status: "failed",
        };
      });
  },
});

export default musicSlice.reducer;
