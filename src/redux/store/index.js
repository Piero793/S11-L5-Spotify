import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./reducers/musicSlice";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export default store;
