export const SELECT_SONG = "SELECT_SONG";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});

export const fetchSongsPending = () => ({
  type: "FETCH_SONGS_PENDING",
});

export const fetchSongsFulfilled = (songs) => ({
  type: "FETCH_SONGS_FULFILLED",
  payload: songs,
});

export const fetchSongsFailed = () => ({
  type: "FETCH_SONGS_FAILED",
});

export const fetchSongs = (artistName) => async (dispatch) => {
  dispatch(fetchSongsPending());
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
    const data = await response.json();
    console.log("DATI:", data);
    dispatch(fetchSongsFulfilled(data.data.slice(0, 4)));
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    dispatch(fetchSongsFailed());
  }
};
