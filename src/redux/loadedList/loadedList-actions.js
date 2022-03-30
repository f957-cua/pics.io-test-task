import { createAction } from "@reduxjs/toolkit";

// pending => start fetch
export const loadingRequest = createAction(
  "loading/Request"
);

// fulfilled
export const addToListSuccess = createAction(
  "list/AddSuccess"
);
// rejected
export const addToListError = createAction(
  "list/AddError"
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