import { DataList } from "components/DataList";
import { FavoriteList } from "components/FavoriteList";
import { ImageList } from "components/ImageList";

export const Home = () => {

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between"
        style={{
          backgroundColor: "#1d1d1d",
        }}
      >
        <div
          className="d-flex flex-column w-50 p-4"
          style={{
            backgroundColor: "#111",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              zIndex: "2",
              backgroundColor: "#111",
              borderBottom:
                "2px solid #1d1d1d"
            }}
          >
            <FavoriteList />
          </div>
          <br />
          <div>
            <DataList />
          </div>
        </div>
        <div
          className="d-flex w-50 flex-row p-4 h-100 flex-wrap"
          style={{
            position: "sticky",
            top: 0,
            right: 0,
          }}
        >
          <ImageList />
        </div>
      </div>
    </>
  );
}