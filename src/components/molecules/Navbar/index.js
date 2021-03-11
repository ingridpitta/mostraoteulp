import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as LogoWhite } from "../../../assets/images/logo_white.svg";
import { ReactComponent as Menu } from "../../../assets/images/menu.svg";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div>
        <div className="menu--withButton">
          <div>
            <Menu onClick={() => setActive(!active)}/>
          </div>
          {active && (
            <ul>
              <Link to="/" onClick={() => setActive(!active)}>
                <li>Início</li>
              </Link>
              <Link to="/about" onClick={() => setActive(!active)}>
                <li>Sobre</li>
              </Link> 
              <Link to="/gallery" onClick={() => setActive(!active)}>
                <li>Galeria Emergente</li>
              </Link>
              <Link to="/register" onClick={() => setActive(!active)}>
                <li>Cadastro</li>
              </Link>
            </ul>
          )}
        </div>
        <div className="logo">
        {console.log(window.innerWidth)}
          {window.innerWidth > 1024  ? <Link to="/"><Logo /></Link> :
          <Link to="/"><LogoWhite /></Link>}
        </div>
        <div className="menu">
          <ul>
            <Link to="/" onClick={() => setActive(!active)}>
              <li>Início</li>
            </Link>
            <Link to="/about" onClick={() => setActive(!active)}>
              <li>Sobre</li>
            </Link>
            <Link to="/gallery" onClick={() => setActive(!active)}>
              <li>Galeria Emergente</li>
            </Link>
            <Link to="/register" onClick={() => setActive(!active)}>
              <li>Cadastro</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
