import { createAction } from "@reduxjs/toolkit";

// fulfilled
export const addToListSuccess = createAction(
  "list/AddSuccess"
);
// rejected
export const addToListError = createAction(
  "list/AddError"
);

// pending => start fetch
export const loadingRequest = createAction(
  "loading/Request"
);

// stop fetching
export const loadingSuccess = createAction(
  "loading/Success"
);
export const loadingError = createAction(
  "loading/Error"
);

export const setCheckedConditions = createAction(
  "list/Checked"
)