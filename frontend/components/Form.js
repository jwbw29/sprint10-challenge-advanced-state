import React from "react";
import { connect } from "react-redux";
import { postQuiz, resetForm, inputChange } from "../state/action-creators";

const Form = (props) => {
  const { form, inputChange, postQuiz } = props;

  const onChange = (e) => {
    const { id, value } = e.target;
    inputChange({ field: id, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      postQuiz({
        question_text: form.newQuestion,
        true_answer_text: form.newTrueAnswer,
        false_answer_text: form.newFalseAnswer,
      })
    );
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
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
    form: state.form,
  };
};

export default connect(mapStateToProps, {
  postQuiz,
  resetForm,
  inputChange,
})(Form);
