// [x] 1. Clicking on the clockwise button: - the next cog to have the text content capital "B" - the next cog to have the class name "active" - the next cog after the sixth to be the first

// [x] 2. Clicking on the COUNTER clockwise button: - the previous cog to have the text content capital "B" - the previous cog to have the class name "active" - the previous cog before the first to be the sixth

// [x] 3. Navigating to the Quiz screen: - Loads the first question & answers , Review how to write asynchronous action creators to consume data from external API's

// [x] 4. Navigating to the Quiz screen: - The "Submit answer" button should be disabled, Review how to conditionally disable a button element.

// [x] 5. Selecting an answer adds the correct class name: - Adds the "selected" class name to the selected answer - Removes the "selected" class name from the other answer, Review setting class names and using data from state.

// [x] 6. Selecting an answer adds the correct text to its button: - Changes the label of the button from "Select" to "SELECTED" - Turns the label of the unselected from "SELECTED" to "Select", Review accessing and using data from state.

// [x] 7. Selecting and submitting an answer: - Loads the next quiz from the API, Review accessing and using data from state.
// [x] 8. Selecting and submitting a correct answer: - Puts the proper success message at the top of the page, Review how to make axios requests and dispatch appropriate actions.

// [x] 9. Selecting and submitting an incorrect answer: - Submitting puts the proper failure message at the top of the page, Review how to connect components to redux, how to store and retrieve data from state, and dispatch the correct actions.

// [x] 10. Typing in inputs changes their , Review handling user input - onChange.

// [x] 11. The submit button is disabled until all inputs have values more than one character in length after trimming leading and trailing whitespace, Review how to conditionally disable a button element.

// [x] 12. Successful submit of new quiz - Displays the correct success message at the top of the screen - Empties out the form, Review using data from state and how to reset state.

// [x] 13. Successful submit of new quiz - Adds the quiz to the roster of quizzes, Review how to use axios to make POST requests.

// [x] 14. The state of the wheel survives route changes: - Moving the wheel, navigating away and back, should keep the position of the "B", Review how to persist state using global state with redux.

// [ ] 15. The state of the quiz survives route changes: - Selecting an answer, navigating away and back, should keep the selected answer - Navigating away and back shouldn't cause a new quiz to be fetched from the API, Review how to persist state using global state with redux.

// [x] 16. The state of the form survives route changes - Filling out the form, navigating away and back, the entered data should , Review how to persist state using global state with redux.
