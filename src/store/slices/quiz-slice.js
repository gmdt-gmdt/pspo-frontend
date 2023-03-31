import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: { quiz: [], type: 1, quizTypes: [] },
  reducers: {
    setQuizData: (state, { payload }) => {
      state.quiz = payload;
    },
    setQuizType: (state, { payload }) => {
      state.type = payload;
    },
    setTypesOfQuiz: (state, { payload }) => {
      state.quizTypes = payload;
    },
  },
});
export const { setQuizData, setQuizType, setTypesOfQuiz } = quizSlice.actions;
export default quizSlice.reducer;
