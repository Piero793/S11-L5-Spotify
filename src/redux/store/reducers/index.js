const initialState = {
  music: {
    songs: [],
    status: "idle",
    selectedSong: null,
    likedSongs: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SONGS_PENDING":
      return {
        ...state,
        music: {
          ...state.music,
          status: "loading",
        },
      };
    case "FETCH_SONGS_FULFILLED":
      return {
        ...state,
        music: {
          songs: action.payload,
          status: "success",
        },
      };
    case "FETCH_SONGS_FAILED":
      return {
        ...state,
        music: {
          ...state.music,
          status: "failed",
        },
      };
    case "SELECT_SONG":
      return {
        ...state,
        music: {
          ...state.music,
          selectedSong: action.payload,
        },
      };
    case "TOGGLE_LIKE": {
      const isLiked = state.music.likedSongs.includes(action.payload);
      return {
        ...state,
        music: {
          ...state.music,
          likedSongs: isLiked
            ? state.music.likedSongs.filter((id) => id !== action.payload)
            : [...state.music.likedSongs, action.payload],
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
