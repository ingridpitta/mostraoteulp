import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo_white.svg";
import "./navbar.styles.scss";

const Navbar = ({ subscribe }) => {
  return (
    <nav>
      <Logo />
      <div>
        <button onClick={subscribe}>CADASTRE-SE</button>
      </div>
    </nav>
  );
};

export default Navbar;
