import React from "react";
import { Navbar, Footer } from "../molecules";
import "./template.styles.scss";

const Template = ({ children }) => {
  return (
    <main className="template--container">
      <Navbar/>
      {children}
      <Footer/>
    </main>
  );
};

export default Template;
