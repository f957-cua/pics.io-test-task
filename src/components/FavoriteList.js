import { useSelector } from "react-redux";
import {getFavoriteList} from "redux/store-selectors";

import { Card } from "./Card";

export const FavoriteList = () => {
  const favoriteList = useSelector(getFavoriteList);

  return (
    <>
      {favoriteList.length ===
      0 ? null : (
        <>
          <p className="h1 card m-1 bg-primary">
            Favorite list
          </p>
          {favoriteList.map(
            (
              { previewURL, checked },
              index
            ) => (
              <div key={index}>
                <Card
                  url={previewURL}
                  checked={checked}
                />
              </div>
            )
          )}
        </>
      )}
    </>
  );
};
