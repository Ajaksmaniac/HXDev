import React, { useContext, useState } from "react";
import ProjectModel from "../models/project";
import axios from "axios";
const ProjectContext = React.createContext<
  | {
      allProjects: ProjectModel[];
      isLoading: boolean;
      fetchProjects: () => {};
    }
  | undefined
>(undefined);

//Shows context name in DevTools
ProjectContext.displayName = "ProjectContext";

export const ProjectContextProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState(false as boolean);
  const [allProjects, setAllProjects] = useState([] as ProjectModel[]);

  const fetchProjects = async () => {
    setIsLoading(true);
    await axios
      .get(`https://api.github.com/users/ajaksmaniac/repos`)
      .then((res) => {
        setAllProjects(res.data);
        setIsLoading(false);
      });
  };

  function wait(ms: number) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  return (
    <ProjectContext.Provider value={{ allProjects, isLoading, fetchProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
