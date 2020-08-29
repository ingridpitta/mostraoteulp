import React from "react";
import { Navbar } from "../../molecules";
import Gif from "../../../assets/videos/gif.mp4";
import ReactPlayer from "react-player";
import "./homeContent.styles.scss";

const HomeContent = ({ subscribe }) => {
  return (
    <section className="player-wrapper">
     <Navbar subscribe={subscribe}/>
      <ReactPlayer
        className="react-player"
        url={Gif}
        loop={true}
        playsInline={true}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
      />
    </section>
  );
};

export default HomeContent;
