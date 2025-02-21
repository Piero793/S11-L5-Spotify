import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk("music/fetchSongs", async (artistName) => {
  console.log(`Fetching songs per l'artista: ${artistName}`);
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
  const data = await response.json();
  console.log(`Dati ricevuti per ${artistName}:`, data);
  return { artistName, songs: data.data.slice(0, 4) };
});

const musicSlice = createSlice({
  name: "music",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        const artistName = action.meta.arg;
        console.log(`Inizio fetching canzoni per ${artistName}`);
        state[artistName] = {
          songs: state[artistName]?.songs || [],
          status: "loading",
        };
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        const { artistName, songs } = action.payload;
        console.log(`Fetching completato per ${artistName}`);
        state[artistName] = {
          songs,
          status: "success",
        };
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        const artistName = action.meta.arg;
        console.log(`Errore nel fetching delle canzoni per ${artistName}`);
        state[artistName] = {
          songs: state[artistName]?.songs || [],
          status: "failed",
        };
      });
  },
});

export default musicSlice.reducer;
