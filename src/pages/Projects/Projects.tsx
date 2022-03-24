import { ProjectContextProvider } from "../../store/subject-context";
import ProjectList from "./ProjectsList";

const Projects = () => {
  return (
    <ProjectContextProvider>
      <ProjectList />
    </ProjectContextProvider>
  );
};

export default Projects;
