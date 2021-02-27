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
          <div key={index}>
            <div>
              <div className="backBtn" onClick={() => history.push(`/portfolio/${currentArtistId}`)}>
                <Back />
                Voltar
              </div>

              <h3>Mostra | 2020</h3>
            </div>

            <h1>{title}</h1>

            <div>
              {links.map((link, pos) => {
                return (
                  <div key={`${index}_${pos}`}>
                    <img src={link} alt={`${title} trabalho 01`} />
                  </div>
                );
              })}
            </div>
            <div>
              <h2>Descrição</h2>
              {description}
            </div>
            <div>
              <h2>Ficha Técnica</h2>
              {datasheet}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
