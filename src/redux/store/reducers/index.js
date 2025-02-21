const initialState = {
  music: {
    songs: [],
    status: "idle",
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

    default:
      return state;
  }
};

export default mainReducer;
