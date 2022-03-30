import {
  useEffect, useRef
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import { asyncAddToList } from "../redux/loadedList/loadedList-operations";
import {getDownloadedList, getLoadingCondition} from "../redux/store-selectors"

import { Card } from "./Card";
import { Loader } from "./Loader";

export const DataList = () => {

  // data from redux
  const list = useSelector(getDownloadedList);

  const loading = useSelector(getLoadingCondition);

  // current page number => variable between renders
  const page = useRef(1)

  // dispatch async action
  const dispatch = useDispatch();

  const loadMoreItems = (page) => dispatch(
      asyncAddToList(page)
    );

  // add fetching data by scrolling
  const handleScroll = (e) => {
    if (
      window.innerHeight +
      e.target.documentElement
      .scrollTop ===
      e.target.documentElement
      .scrollHeight
    ) {
      
      page.current++
      loadMoreItems(page.current);
      }
    };
    
  // fetching first data and add listener for infinite scroll
  useEffect(() => {
    loadMoreItems(page.current);
    window.addEventListener(
      "scroll",
      handleScroll
    );
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      {list.length === 0
        ? null
        : list.map(
            ({ previewURL , checked}, index) => (
              <div key={index}>
                <Card
                  url={previewURL}
                  checked={checked}
                />
              </div>
            )
          )}
    </>
  );
};
