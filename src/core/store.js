import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/themeSlice";
import createSagaMiddleware from "@redux-saga/core";
import personalHomePageReducer from "../features/personalHomePageSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomePage: personalHomePageReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
