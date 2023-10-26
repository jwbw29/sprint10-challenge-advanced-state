//// You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

// [x] Wheel
const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state + 1) % 6;

    case MOVE_COUNTERCLOCKWISE:
      return (state - 1 + 6) % 6;

    default:
      return state;
  }
}

// [x] Quiz
const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}

// [ ] QUIZ - Selected Answer
const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state;
}

// [ ] QUIZ/FORM   - Message
const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

// [ ] Form
const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
