import React, { useState } from "react";
import Hamburger from "react-hamburgers";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div className="logo">
        <Logo style={{ marginLeft: "20px" }} />
      </div>
      <div className="menu--withButton">
        <Hamburger
          active={active}
          type="slider"
          onClick={() => setActive(!active)}
        />
        {active && (
          <ul>
            <Link to="/">
              <li>Início</li>
            </Link>
            <Link to="/about">
              <li>Sobre</li>
            </Link>
            <Link to="/gallery">
              <li>Galeria</li>
            </Link>
            <Link to="/contact">
              <li>Contato</li>
            </Link>
            <Link to="/register">
              <li>Cadastro</li>
            </Link>
          </ul>
        )}
      </div>
      <div className="menu">
        <ul>
          <Link to="/">
            <li>Início</li>
          </Link>
          <Link to="/about">
            <li>Sobre</li>
          </Link>
          <Link to="/gallery">
            <li>Galeria</li>
          </Link>
          <Link to="/contact">
            <li>Contato</li>
          </Link>
          <Link to="/register">
            <li>Cadastro</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
