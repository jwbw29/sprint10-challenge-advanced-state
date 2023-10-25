import React from "react";
import { connect } from "react-redux";
import { selectAnswer, setMessage } from "../state/action-creators";

const Quiz = (props) => {
  const { quiz, selectedAnswer, infoMessage, selectAnswer, setMessage } = props;
  return (
    <div id="wrapper">
      {
        //** quiz already in state? Let's use that, otherwise render "Loading next quiz..." */
        true ? (
          <>
            <h2>What is a closure?</h2>

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

            <button id="submitAnswerBtn">Submit answer</button>
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
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps, { selectAnswer, setMessage })(Quiz);
