//// You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";
import axios from "axios";

// [x] moveClockwise
export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

// [x] moveCounterClockwise
export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

// [x] setSelectedAnswer
export function setSelectedAnswer(answerId) {
  return { type: SET_SELECTED_ANSWER, payload: answerId };
}

// [ ] setMessage
export function setMessage(message) {
  return { type: SET_INFO_MESSAGE, payload: message };
}

// [ ] setQuiz
export function setQuiz(quizData) {
  // console.log(`setQuiz(quizData), quizData => ${quizData}`);
  return { type: SET_QUIZ_INTO_STATE, payload: quizData };
}

// [ ] inputChange
export function inputChange(input) {
  return {
    type: INPUT_CHANGE,
    payload: {
      newQuestion: input,
      newTrueAnswer: input,
      newFalseAnswer: input,
    },
  };
}

// [ ] resetForm
export function resetForm() {
  return { type: RESET_FORM };
}

//// Async action creators
// [x] fetchQuiz
export const fetchQuiz = () => (dispatch) => {
  const URL = "http://localhost:9000/api/quiz/next";
  // - First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
  dispatch(setQuiz(null));
  axios
    .get(URL)
    .then((res) => {
      // - On successful GET:
      //    - Dispatch an action to send the obtained quiz to its state
      // console.log(`res.data.question => ${res.data.question}`);
      dispatch(setQuiz(res.data));
    })
    .catch((err) => console.log(err));
};

// [x] postAnswer
export const postAnswer = (payload) => (dispatch) => {
  const URL = "http://localhost:9000/api/quiz/answer";
  axios
    .post(URL, {
      quiz_id: payload.quiz_id,
      answer_id: payload.answer_id,
    })
    // - On successful POST:
    .then((res) => {
      //    - Dispatch an action to reset the selected answer state
      dispatch(setSelectedAnswer(null));
      //    - Dispatch the fetching of the next quiz
      dispatch(setMessage(res.data.message));
      dispatch(fetchQuiz());
    })
    .catch((err) => console.log(err));

  //    - Dispatch an action to set the server message to state
};

// [ ] postQuiz
export const postQuiz = (payload) => (dispatch) => {
  const URL = "http://localhost:9000/api/quiz/new";
  axios
    .post(URL, {
      question_text: payload.question_text,
      true_answer_text: payload.true_answer_text,
      false_answer_text: payload.false_answer_text,
    })
    .then((res) => {
      // - On successful POST:
      // [x] Dispatch the correct message to the the appropriate state
      dispatch(setMessage(res.data.message));
      // [x] Dispatch the resetting of the form
      dispatch(resetForm());
    })
    .catch((err) => console.log(err));
};
//// On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
