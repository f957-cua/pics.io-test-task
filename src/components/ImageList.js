import { useSelector } from "react-redux";
import { getFavoriteList } from "../redux/store-selectors";

import ImageView from "../views/ImageView";

export const ImageList = () => {
  
  const favoriteList = useSelector(getFavoriteList);

  return (
    <>
      {
        favoriteList.length === 0
          ? null
          : favoriteList.map(
              (
                { previewURL, tags },
                index
              ) => (
                <div key={index}>
                  <ImageView
                    url={previewURL}
                    tags={tags}
                  />
                </div>
              )
            )
        // )
      }
    </>
  );
};
