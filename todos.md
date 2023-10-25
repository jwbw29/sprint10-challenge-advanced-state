# Stuff to fix

## Whole App
- [ ] The structure of the HTML (hierarchy, ids, class names, texts on buttons etc) must match those of the prototype exactly.
- [ ] The routes **don't lose their state** by navigating the links back and forth:
  - Current position of the "B" in the wheel is maintained.
  - Current quiz question stays loaded.
  - Values inside the form are kept.
- [ ] connect components to Redux store

## Wheel
- [x] Clockwise button to move B clockwise
    - onClick -> make next index active?
- [x] Counter clockwise button to move B counter clockwise
    - onClick -> make previous index active?

## Quiz
- [ ] GET questions from the API
- [ ] POST answer to API on "submit"
- [ ] The endpoint to fetch the next quiz is rather slow, and a "Loading next quiz" shows instead of the quiz **while it arrives**.
- [ ] A next quiz is only requested if there is **no quiz already in app state**, or by submitting an answer.
- [ ] The "Submit answer" button in the quiz stays disabled until **an answer is selected**.

## Form
- [ ] The "Submit new quiz" button in the form stays disabled until **all** inputs have values such that `value.trim().length > 0`.
  **Note: This helps eliminate answers with spaces only**
- [ ] Submitting a new quiz successfully **adds it to the roster** of questions that cycle through the quiz screen.
  **This will be a POST to the API**


## Message
- [x] Needs to apply state instead of hard code





