import { createReducer } from "@reduxjs/toolkit";
import {
  addToListSuccess,
  addToListError,
  setCheckedConditions,
  loadingRequest,
  loadingSuccess,
  loadingError,
} from "./loadedList-actions";

export const loadedListReducer = createReducer(
  [],
  {
    [addToListSuccess]: (
      state,
      { payload }
    ) => [...state, ...payload],
    [addToListError]: (
      _,
      { payload }
    ) => [payload],
    [setCheckedConditions]: (
      state,
      { payload }
    ) => [
      ...state.map((item) => {
        if (
          item.previewURL ===
          payload.previewURL
        ) {
          return {
            ...item,
            checked: !payload.checked,
          };
        }
        return item;
      }),
    ],
  }
);

export const loadingReducer = createReducer(
  false,
  {
    [loadingRequest]: () => true,
    [loadingSuccess]: () => false,
    [loadingError]: () => false,
  }
);
