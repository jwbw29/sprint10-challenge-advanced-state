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

//// Doing it this way below seems to make the state look wonky compared to the prototype
// const initialState = {
//   wheel: 0,
//   quiz: null,
//   selectedAnswer: null,
//   infoMessage: "",
//   form: {
//     newQuestion: "",
//     newTrueAnswer: "",
//     newFalseAnswer: "",
//   },
// };

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      console.log("button was clicked");
      return (initialWheelState + 1) % 6;
    // (wheel + 1) % 6
    // case MOVE_COUNTERCLOCKWISE:
    //   return {
    //     ...state,
    //     initialWheelState: (initialWheelState - 1 + 6) % 6,
    //   };

    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  return state;
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state;
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

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
