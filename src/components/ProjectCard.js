import React from "react";
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
        {props.url && (<a href={props.url} className="card-url"><img className="project-icons" src={playIcon} alt="app" target="_blank"></img></a>)}
        {props.url_gh && (<a href={props.url_gh} className="card-url"><img className="project-icons" src={githubIcon} alt="github" target="_blank"></img></a>)}
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
