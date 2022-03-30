import axios from "axios";
import {
  addToListSuccess,
  addToListError,
  loadingRequest,
  loadingSuccess,
  loadingError,
} from "./loadedList-actions";

const BASE_URL = "https://pixabay.com/api"; 
const API_KEY = "21268272-c5791a68db62a23d91af73a0c";

export const asyncAddToList = page => async (dispatch) => {
  // start loader
  dispatch(loadingRequest());
  
  try {
    // request to API
    const fetchedImageArr =
      await axios.get(
        `${BASE_URL}/?key=${API_KEY}&q=foto&image_type=photo&orientation=horizontal&page=${page}&per_page=20`
      );

    // creation keyword list  
    const newList = [];
    
    // filling keyword list
    fetchedImageArr.data.hits.forEach(
      ({ previewURL }) =>
      newList.push({
        previewURL,
        checked: false,
      })
    );
        
    // stop loader
    dispatch(loadingSuccess());

    // dispatch action with the new list
    return dispatch(
      addToListSuccess(newList)
    );
  } catch (error) {
    dispatch(loadingError());
    dispatch(addToListError(error));
  }
};