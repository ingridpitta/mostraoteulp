import React from "react";
import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
import { ReactComponent as Email } from "../../../assets/images/email.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://www.instagram.com/mostraoteu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="instagram" />
        </a>
        <a
          href="https://www.facebook.com/oteunamostra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="fb" />
        </a>
        <a
          href="https://twitter.com/mostraoteu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="twitter" />
        </a>
        <a
          href="mailto:mostraoteu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email className="email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
