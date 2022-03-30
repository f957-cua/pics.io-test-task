import { createReducer } from "@reduxjs/toolkit";
import {addToFavorite, removeFromFavorite} from "redux/favorite/favorite-actions"

export const favoriteListReducer =
  createReducer([], {
    [addToFavorite.type]: (
      state,
      { payload }
    ) => [...state, payload],
    [removeFromFavorite.type]: (
      state,
      { payload }
    ) => [
      ...state.filter(
        ({ previewURL }) =>
          previewURL !==
          payload.previewURL
      ),
    ],
  });