import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/images/back.svg";
import { Link } from "react-router-dom";
import "./portfolio.styles.scss";

const Portfolio = ({ artists, ...props }) => {
  const history = useHistory();
  const location = props.location;
  const path = location.pathname.split("/");
  const artistId = path[path.length - 1];

  const currentArtist = artists.filter(({ id }) => id == artistId);

  console.log({ artistId, currentArtist });

  return (
    <section className="portfolio--container">
      {currentArtist.map((artist) => {
        const { bio, ed_mostra, id, name, photo, projects } = artist;
        return (
          <div key={id}>
            <div>
              <div
                className="backBtn"
                onClick={() => history.push("/gallery")}
              >
                <Back />
                Voltar
              </div>

              <h3>Mostra | 2020</h3>
            </div>
            <div className="about">
              <h1>{name}</h1>
              <img src={photo} alt={`${name} foto`} />
              <p>{bio}</p>
            </div>
            {projects.map((project) => {
              return (
                <div key={project.index} className="projects">
                  {project.title && (
                    <Link to={{
                      pathname: `/project/${project.index}`,
                      state: currentArtist
                    }}>
                      <img
                        src={project.links[0] !== "-" && project.links[0]}
                        alt={`${project.title} capa`}
                      />
                      <div>
                        <h3>{project.title}</h3>
                        <h4>{project.year}</h4>
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
