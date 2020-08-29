import React from "react";
import "./title.styles.scss";

const Title = ({ title, type }) => {
  return (
    <div className="title--container">
    {type === "support" ? <h1 className="title--support">{title}</h1> : <h1 className="title--default">{title}</h1>}
    </div>
  )
};

export default Title;
