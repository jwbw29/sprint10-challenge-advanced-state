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
    selectAnswer,
    infoMessage,
    setMessage,
    setQuiz,
    fetchQuiz,
    quizData,
  } = props;

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  const handleClick = (e) => {
    e.preventDefault;
    // postAnswer()
    fetchQuiz();
  };
  return (
    <div id="wrapper">
      {
        //** quiz already in state? Let's use that, otherwise render "Loading next quiz..." */
        quizData ? ( // TODO replace this with something like quizData
          <>
            <h2>{quizData.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
              </div>
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
    selectAnswer: state.selectAnswer,
    infoMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps, {
  selectAnswer,
  setMessage,
  setQuiz,
  fetchQuiz,
})(Quiz);
