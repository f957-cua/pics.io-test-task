import { DataList } from "components/DataList";
import { FavoriteList } from "components/FavoriteList";
import { ImageList } from "components/ImageList";

export const Home = () => {

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column w-75 p-4">
          <div>
            <FavoriteList />
            <p className="h1 card m-1 bg-secondary">
              pics.io
            </p>
          </div>
          <div>
            <DataList />
          </div>
        </div>
        <div className="d-flex flex-column p-4">
          <ImageList />
        </div>
      </div>
    </>
  );
}