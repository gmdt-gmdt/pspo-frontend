import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./slices/quiz-slice";

export default configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    questions: quizReducer,
  },
});
