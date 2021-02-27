import React from "react";
import { Navbar } from "../molecules";
import "./template.styles.scss";

const Template = ({ children }) => {
  return (
    <main className="template--container">
      <Navbar/>
      {children}
    </main>
  );
};

export default Template;
