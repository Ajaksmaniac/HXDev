import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";
import {
  ProjectContextProvider,
  useProjects,
} from "../../store/subject-context";
import ProjectList from "./ProjectsList";

const Projects = () => {
  return (
    <ProjectContextProvider>
      <ProjectList />
    </ProjectContextProvider>
  );
};

export default Projects;
