import React from "react";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";
import { connect } from "react-redux";

const Wheel = (props) => {
  const { wheel, moveClockwise, moveCounterClockwise } = props;
  //// TODO I think we need to apply the state variable to these divs somehow; but that doesn't explain while it's not console logging onClick

  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((cog) => {
          const isActive = wheel === cog;
          return (
            <div
              key={cog}
              className={`cog ${isActive ? "active" : ""}`}
              style={{ "--i": cog }}
            >
              {isActive ? "B" : null}
            </div>
          );
        })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => moveCounterClockwise()}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={() => moveClockwise()}>
          Clockwise
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    wheel: state.wheel,
  };
};

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
