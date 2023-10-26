import React from "react";
import { connect } from "react-redux";
import { postQuiz, resetForm, inputChange } from "../state/action-creators";

const Form = (props) => {
  const { infoMessage, form } = props;

  const onChange = (e) => {
    inputChange(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>{form.newQuestion}</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button /*{selectedAnswer ? 'disabled' : ''}*/ id="submitNewQuizBtn">
        Submit new quiz
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage,
    form: {
      newQuestion: state.newQuestion,
      newTrueAnswer: state.newTrueAnswer,
      newFalseAnswer: state.newFalseAnswer,
    },
  };
};

export default connect(mapStateToProps, { postQuiz, resetForm, inputChange })(
  Form
);
