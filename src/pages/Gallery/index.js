import React from "react";
import {ReactComponent as Title} from '../../assets/images/title.svg';
import { Link } from "react-router-dom";
import "./gallery.styles.scss";

const Gallery = ({ artists }) => {
  return (
    <section className="gallery--container">
      <Title />
      {artists.map((artist, index) => {
        const { id, bio, ed_mostra, name, photo, projects } = artist;

        return (
          <Link to={`/artist/portfolio/${id}`}>
            <div key={index} className="gallery--artist">
              {/* <img src={photo} alt={`${name} foto`} /> */}
              <div></div>
              <h4>{name}</h4>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Gallery;
