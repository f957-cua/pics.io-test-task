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
          <p
            className="card"
            style={{
              backgroundColor: "#111",
              color: "#fc0"
            }}
          >
            Favorite list
          </p>
          {favoriteList.map(
            (
              {
                userImageURL,
                name,
                checked,
              },
              index
            ) => (
              <div key={index}>
                <Card
                  url={userImageURL}
                  name={name}
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
