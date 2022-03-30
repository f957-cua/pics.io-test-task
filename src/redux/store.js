import {configureStore} from "@reduxjs/toolkit";
import { favoriteListReducer } from "redux/favorite/favorite-reducer";
import {
  loadedListReducer,
  loadingReducer,
} from "redux/loadedList/loadedList-reducer";

const store = configureStore({
  reducer: {
    favoriteList: favoriteListReducer,
    downloadedList: loadedListReducer,
    axiosLoading: loadingReducer,
  },
  devTools:
    process.env.NODE_ENV ===
    "development"
});

export default store;