import { useDispatch } from "react-redux";
import {addToFavorite, removeFromFavorite} from "redux/favorite/favorite-actions";
import {setCheckedConditions} from "redux/loadedList/loadedList-actions"

import CardView from "views/CardView";

export const Card = ({
  url,
  checked
}) => {
  const dispatch = useDispatch()

  const handleCheckbox = ({target}) => {
    const { checked } = target;

    const previewURL =
      target.parentNode.parentNode
        .parentNode.firstChild
        .textContent;

    dispatch(
      checked
        ? addToFavorite({
            previewURL,
            checked,
          })
        : removeFromFavorite({
            previewURL,
            checked,
          })
    );

    dispatch(
      setCheckedConditions({
        previewURL,
        checked: !checked,
      })
    );
  };

  return (
    <CardView
      url={url}
      checked={checked}
      onChecked={handleCheckbox}
    />
  );
};
