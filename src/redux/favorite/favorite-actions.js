import { createAction } from "@reduxjs/toolkit";

export const addToFavorite = createAction(
  "favorite/Add"
);

export const removeFromFavorite = createAction(
  "favorite/Remove"
);