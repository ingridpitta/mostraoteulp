import React from "react";
import "./text.styles.scss";

const Text = ({ text }) => {
  return (
    <div className="text--container">
      <h2>{text}</h2>
    </div>
  );
};

export default Text;
