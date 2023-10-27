//// You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
} from "./action-types";

//// WHEEL ///////
const initialWheelState = 0;
const wheel = (state = initialWheelState, action) => {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state + 1) % 6;

    case MOVE_COUNTERCLOCKWISE:
      return (state - 1 + 6) % 6;

    default:
      return state;
  }
};

//// QUIZ ///////
const initialQuizState = null;
const quiz = (state = initialQuizState, action) => {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      // TODO Possibly add {...state} here
      return action.payload;
    default:
      return state;
  }
};

//// SELECTED ANSWER ///////
const initialSelectedAnswerState = null;
const selectedAnswer = (state = initialSelectedAnswerState, action) => {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      console.log(`action.answerId => ${action.payload}`);
      return action.payload;
    default:
      return state;
  }
};

//// MESSAGE ///////
const initialMessageState = "";
const infoMessage = (state = initialMessageState, action) => {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

//// FORM //////
const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
const form = (state = initialFormState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
