import { useSelector } from "react-redux";
import {getFavoriteList} from "../redux/store-selectors";

import { Card } from "./Card";

export const FavoriteList = () => {
  const favoriteList = useSelector(getFavoriteList);

  return (
    <>
      {
        favoriteList.length === 0
          ? null
          : favoriteList.map(
              ({previewURL, checked}, index) => (
                <div key={index}>
                  <Card
                    url={previewURL}
                    checked={
                      checked
                    }
                  />
                </div>
              )
            )
        // )
      }
    </>
  );
};
