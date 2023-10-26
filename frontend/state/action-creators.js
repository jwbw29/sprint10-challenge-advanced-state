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

export function moveClockwise() {
  return { type: MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: MOVE_COUNTERCLOCKWISE };
}

export function setSelectedAnswer(answerId) {
  return { type: SET_SELECTED_ANSWER, payload: answerId };
}

export function setMessage() {
  return { type: SET_INFO_MESSAGE };
}

export function setQuiz(quizData) {
  // console.log(`setQuiz(quizData), quizData => ${quizData}`);
  return { type: SET_QUIZ_INTO_STATE, payload: quizData };
}

export function inputChange() {
  return { type: INPUT_CHANGE };
}

export function resetForm() {
  return { type: RESET_FORM };
}

//// Async action creators
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

export const postAnswer = () => (dispatch) => {
  const URL = "http://localhost:9000/api/quiz/answer";
  // axios.post(URL, {
  //   quiz_id: ,
  //   answer_id:
  // })
  // - On successful POST:
  //    - Dispatch an action to reset the selected answer state
  dispatch(setSelectedAnswer(null));
  //    - Dispatch an action to set the server message to state
  //    - Dispatch the fetching of the next quiz
  dispatch(fetchQuiz());
};
export const postQuiz = () => (dispatch) => {
  const URL = "http://localhost:9000/api/quiz/new";
  // - On successful POST:
  //    - Dispatch the correct message to the the appropriate state
  //    - Dispatch the resetting of the form
};
//// On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
