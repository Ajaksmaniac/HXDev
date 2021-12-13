import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <ProjectCard name="TEST" description="TEST" link="TEST" image="asd" />
      </div>
      <div className="col-sm-4">
        <ProjectCard name="TEST" description="TEST" link="TEST" image="asd" />
      </div>
      <div className="col-sm-4">
        <ProjectCard name="TEST" description="TEST" link="TEST" image="asd" />
      </div>
      <div className="col-sm-4">
        <ProjectCard name="TEST" description="TEST" link="TEST" image="asd" />
      </div>
    </div>
  );
};

export default Projects;
