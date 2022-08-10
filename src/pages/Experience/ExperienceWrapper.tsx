import { ProjectContextProvider } from "../../store/subject-context";
import Experience from './Experience'
const ExperienceWrapper = () => {

  return (
    <ProjectContextProvider>
      <Experience />
    </ProjectContextProvider>
  )
};

export default ExperienceWrapper;
