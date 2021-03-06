import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/images/back.svg";
import { Link } from "react-router-dom";
import "./project.styles.scss";

const Project = ({ ...props }) => {
  const history = useHistory();
  const location = props.location;
  const path = location.pathname.split("/");
  const projectId = path[path.length - 1];
  const currentArtist = location.state[0];
  const currentArtistProjects = currentArtist.projects;
  const currentArtistId = currentArtist.id;

  const currentProject = currentArtistProjects.filter(
    ({ index }) => index && index.includes(projectId)
  );

  console.log({ projectId, currentProject, currentArtist });
  return (
    <section className="project--container">
      {currentProject.map((project) => {
        const {
          index,
          artist,
          datasheet,
          description,
          links,
          title,
          year,
        } = project;
        return (
          <div className="project--content" key={index}>
            <div className="project--nav">
              <div
                className="backBtn"
                onClick={() => history.push(`/portfolio/${currentArtistId}`)}
              >
                <Back />
                Voltar
              </div>

              <h3>Ecossistema Criativo | 2020</h3>
            </div>

            <h1>{title}</h1>

            <div className="project--grid">
              <div className="project--images">
                {links.map((link, pos) => {
                  return (
                    <div
                      key={`${index}_${pos}`}
                      dangerouslySetInnerHTML={{
                        __html: link,
                      }}
                    ></div>
                  );
                })}
              </div>
              <div className="project--infos">
                <div className="project--description">
                  {description !== "-" && (
                    <>
                      <h2>Descrição</h2>
                      {description}
                    </>
                  )}
                </div>
                <div className="project--datasheet">
                  <h2>Ficha Técnica</h2>
                  <div dangerouslySetInnerHTML={{ __html: datasheet }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
