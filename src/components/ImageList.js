import { useSelector } from "react-redux";
import { getFavoriteList } from "redux/store-selectors";

import ImageView from "views/ImageView";

export const ImageList = () => {
  
  const favoriteList = useSelector(getFavoriteList);

  return (
    <>
      {
        favoriteList.length === 0
          ? null
          : favoriteList.map(
              (
                { userImageURL }, index
              ) => (
                  <ImageView
                url={userImageURL}
                key={index}
                  />
              )
            )
        // )
      }
    </>
  );
};
