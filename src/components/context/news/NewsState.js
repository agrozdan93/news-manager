import React, { useReducer, useEffect } from "react";
import axios from "axios";
import NewsContext from "./newsContext";
import NewsReducer from "./newsReducer";
import {
  GET_NEWS,
  GET_SINGLE_NEWS,
  GET_SEARCHED_NEWS,
  SET_LOADING,
} from "../types";

const NewsState = (props) => {
  const initialState = {
    news: [],
    singleNews: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  useEffect(() => {
    setLoading();
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      )
      .then((res) => {
        dispatch({
          type: GET_NEWS,
          payload: res.data.articles,
        });
      })
      .catch((err) => console.log);
  }, []);
  // Get News

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <NewsContext.Provider value={{ news: state.news, loading: state.loading }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
