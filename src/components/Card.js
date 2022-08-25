import { useDispatch } from "react-redux";
import {addToFavorite, removeFromFavorite} from "redux/favorite/favorite-actions";
import {setCheckedConditions} from "redux/loadedList/loadedList-actions"

import CardView from "views/CardView";

export const Card = ({
  url,
  name,
  checked
}) => {
  const dispatch = useDispatch()

  const handleCheckbox = ({target}) => {
    const { checked } = target

    dispatch(
      checked
        ? addToFavorite({
            userImageURL: url,
            name,
            checked,
          })
        : removeFromFavorite({
            userImageURL: url,
            name,
            checked,
          })
    );

    dispatch(
      setCheckedConditions({
        userImageURL: url,
        name,
        checked: !checked,
      })
    );
  };

  return (
    <CardView
      url={url}
      name={name}
      checked={checked}
      onChecked={handleCheckbox}
    />
  );
};
