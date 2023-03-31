import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import {
  getTypesOfQuizFromAPI,
  setTypeOfQuiz,
} from "../store/actions/quiz-actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const typesOfQuiz = useSelector((state) => state.questions.quizTypes);

  const handlerChoiceTypeDB = (type) => {
    dispatch(setTypeOfQuiz(type));
    navigate(`/question`);
  };

  useEffect(() => {
    dispatch(getTypesOfQuizFromAPI());
  }, [dispatch]);

  return (
    <div className="content">
      <>
        {typesOfQuiz &&
          typesOfQuiz.length &&
          typesOfQuiz.map(({ Type, Description }) => (
            <div className="type-quiz-container" key={Type}>
              <div
                className="type-quiz-container-name"
                onClick={() => handlerChoiceTypeDB(Type)}
              >
                {Description}
              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default Home;
