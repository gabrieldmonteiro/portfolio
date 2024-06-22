import React from "react";
import { Link } from "react-router-dom"
import '../style/projectCardStyle.css'
import githubIcon from "../img/github.png"
import playIcon from "../img/play.png"

const ProjectCard = (props) => {
  return (
    <div className="main-project-div">
      <div className="project-card">
        <div>
          <p><b>{props.name}</b></p>
        </div>
        <div>
          <img alt="" className="card-project-image" src={props.image}></img>
        </div>
        <div className="project-description">
          {props.description}
        </div>
        <div className="card-link-div">
          {props.url && (
            <Link to={props.url} className="card-url" target="_blank">
              <img className="project-icons" src={playIcon} alt="app" />
            </Link>
          )}
          {props.url_gh && (
            <Link to={props.url_gh} className="card-url" target="_blank" >
              <img className="project-icons" src={githubIcon} alt="github" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
