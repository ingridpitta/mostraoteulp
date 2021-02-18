import React from "react";
import { Navbar } from "../molecules";
import "./template.styles.scss";

const Template = ({ children }) => {
  return (
    <>
      <Navbar style={{zIndex: "100"}}/>
      {/* {children} */}
    </>
  );
};

export default Template;
