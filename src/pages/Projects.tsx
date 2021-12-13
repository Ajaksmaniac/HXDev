import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Container className="mt-4 ">
      <div className="row">
        <div className="col-sm-4 ">
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
    </Container>
  );
};

export default Projects;
