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
          <div className="portfolio--content" key={id}>
            <div className="portfolio--nav">
              <div className="backBtn" onClick={() => history.push("/gallery")}>
                <Back />
                Voltar
              </div>

              <h3>Mostra | 2020</h3>
            </div>
            <div className="about">
              <h1>{name}</h1>
              <div className="about--description">
                <div>
                  <img src={`/images/gallery/${photo}`} alt={name} />
                </div>

                {bio !== "-" && (
                  <p>
                    <span>{name}, </span>
                    {bio}
                  </p>
                )}
              </div>
            </div>
            <div className="projects">
              {projects.map((project) => {
                return (
                  <>
                    {project.title && (
                      <Link
                        key={project.index}
                        to={{
                          pathname: `/project/${project.index}`,
                          state: currentArtist,
                        }}
                      >
                        <div className="project--image">
                          {project.links[0] !== "-" && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: project.links[0],
                              }}
                            ></div>
                          )}
                        </div>
                        <div>
                          <h3>{project.title}</h3>
                          <h4>{project.year}</h4>
                        </div>
                      </Link>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
