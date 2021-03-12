import React from "react";
import { ReactComponent as Title } from "../../assets/images/title.svg";
import { Link } from "react-router-dom";
import "./gallery.styles.scss";

const Gallery = ({ artists }) => {
  return (
    <section className="gallery--container">
      <Title alt="mostra o teu! ecossistema criativo"/>
      <div className="gallery--content">
        {artists.map((artist, index) => {
          const { id, bio, ed_mostra, name, photo, projects } = artist;

          return (
            <Link to={`/portfolio/${id}`}>
              <div key={index} className="gallery--artist">
                <div
                  dangerouslySetInnerHTML={{
                    __html: photo,
                  }}
                ></div>
              </div>
              <h4>{name}</h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
