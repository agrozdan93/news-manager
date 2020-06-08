import { createContext } from "react";

const newsContext = createContext({});

export const NewsProvider = newsContext.Provider;

export default newsContext;
