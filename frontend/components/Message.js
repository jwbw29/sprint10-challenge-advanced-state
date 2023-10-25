import React from "react";
import { connect } from "react-redux";

const Message = (props) => {
  const { infoMessage } = props;
  // [x] We'll remove "Nice job!" and replace with something passed from a prop
  return <div id="message">{infoMessage}</div>;
};

const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps, {})(Message);
