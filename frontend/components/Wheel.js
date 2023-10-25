import React from "react";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";
import { connect } from "react-redux";

const Wheel = (props) => {
  const { wheel, moveClockwise, moveCounterClockwise } = props;

  return (
    //// TODO I think we need to apply the state variable to these divs somehow; but that doesn't explain while it's not console logging onClick
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>
          B
        </div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>
        {/** --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => moveCounterClockwise()}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={() => moveClockwise(wheel)}>
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
