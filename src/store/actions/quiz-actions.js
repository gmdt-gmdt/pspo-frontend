import axios from "axios";
import { setQuizData, setQuizType, setTypesOfQuiz } from "../slices/quiz-slice";

const API_BASE_URL = "http://localhost:8000";

export const searchQuizDataByTermAndTypeFromAPI = (term, type) => {
  return async (dispatch) => {
    const getQuiz = async () => {
      const { data } = await axios.get(
        `${API_BASE_URL}/search/${term}/${type}`
      );
      return data;
    };
    try {
      const quiz = await getQuiz();
      dispatch(setQuizData(quiz));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setTypeOfQuiz = (type) => {
  return async (dispatch) => {
    dispatch(setQuizType(type));
  };
};

export const getTypesOfQuizFromAPI = () => {
  return async (dispatch) => {
    const getTypesOfQuiz = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/type-quiz`);
      return data;
    };
    try {
      const types = await getTypesOfQuiz();
      dispatch(setTypesOfQuiz(types));
    } catch (error) {
      console.error(error);
    }
  };
};
