import { createReducer } from "@reduxjs/toolkit";
import {
  setCheckedConditions,
} from "./loadedList-actions";
import {asyncAddToList} from "./loadedList-operations"

export const loadedListReducer = createReducer(
  [],
  {
    [asyncAddToList.fulfilled]: (
      state,
      { payload }
    ) => [...state, ...payload],
    [asyncAddToList.rejected]: (
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
    [asyncAddToList.pending]: () =>
      true,
    [asyncAddToList.fulfilled]: () =>
      false,
    [asyncAddToList.rejected]: () => false,
  }
);
