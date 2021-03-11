import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
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
              {/* <Link to="/" onClick={() => setActive(!active)}>
                <li>Início</li>
              </Link>*/}
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
          <Logo />
        </div>
        <div className="menu">
          <ul>
            {/* <Link to="/" onClick={() => setActive(!active)}>
              <li>Início</li>
            </Link>*/}
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
