import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  setSelectedAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
} from "../state/action-creators";

const Quiz = (props) => {
  const { selectedAnswer, fetchQuiz, quizData, postAnswer, setSelectedAnswer } =
    props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerClick = (answerId) => {
    console.log(answerId);
    setSelectedAnswer(answerId);
  };

  const handleSubmitClick = () => {
    // e.preventDefault();
    console.log(`quiz_id: ${quizData.quiz_id}, answer_id: ${selectedAnswer}`);
    postAnswer({ quiz_id: quizData.quiz_id, answer_id: selectedAnswer });
    console.log(quizData)
    // fetchQuiz();
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
                  <button onClick={() => handleAnswerClick(answer.answer_id)}>
                    {selectedAnswer === answer.answer_id
                      ? "SELECTED"
                      : "Select"}
                  </button>
                </div>
              ))}
            </div>
            <button id="submitAnswerBtn" onClick={handleSubmitClick}>
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
  setSelectedAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
  postAnswer,
})(Quiz);
