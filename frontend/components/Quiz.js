import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
} from "../state/action-creators";

const Quiz = (props) => {
  const {
    selectedAnswer,
    infoMessage,
    setMessage,
    setQuiz,
    fetchQuiz,
    quizData,
    postAnswer,
  } = props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleClick = (e) => {
    e.preventDefault;
    // postAnswer()
    postAnswer();
  };
  return (
    <div id="wrapper">
      {
        //** quiz already in state? Let's use that, otherwise render "Loading next quiz..." */
        quizData ? (
          <>
            <h2>{quizData.question}</h2>
            <div id="quizAnswers">
              {quizData.answers.map((answer) => (
                <div
                  key={answer.answer_id}
                  className={`answer ${
                    selectedAnswer === answer.answer_id ? "selected" : ""
                  }`}
                >
                  {answer.text}
                  <button>
                    {selectedAnswer === answer.answer_id
                      ? "SELECTED"
                      : "Select"}
                  </button>
                </div>
              ))}
            </div>
            <button id="submitAnswerBtn" onClick={handleClick}>
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quizData: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps, {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
})(Quiz);
