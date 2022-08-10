import React, { useContext, useState } from "react";
import ProjectModel, { keyValuePair } from "../models/project";
import axios, { AxiosPromise } from "axios";
import { fetchAllProjectLanguages } from "../util/ProjectUtil";
import { getNumberOfUsage } from "../util/ProjectUtil";

const ProjectContext = React.createContext<
  | {
      allProjects: ProjectModel[];
      overallUsedTechnologies: keyValuePair[];
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
  const [overallUsedTechnologies, setOverallUsedTechnologies] = useState(
    [] as keyValuePair[]
  );

  const fetchProjects = async () => {
    setIsLoading(true);

    const projects = sessionStorage.getItem("projects");
    const technologies = sessionStorage.getItem("overAllUsedTechnologies");
    if (projects != null && technologies != null) {
      setAllProjects(
        JSON.parse(sessionStorage.getItem("projects") || "{}").projects
      );
      setOverallUsedTechnologies(
        JSON.parse(sessionStorage.getItem("overAllUsedTechnologies") || "{}")
          .technologies
      );
      setIsLoading(false);
    } else {
      console.log("Downloading");
      await axios
        .get(`https://api.github.com/users/ajaksmaniac/repos`)
        .then((res) => {
          setAllProjects(res.data);
          let urlList: Promise<AxiosPromise>[] = [];
          res.data.forEach((e: ProjectModel) => {
            urlList.push(axios.get(e.languages_url));
          });
          sessionStorage.setItem(
            "projects",
            JSON.stringify({ projects: res.data })
          );
          return fetchAllProjectLanguages(urlList);
        })
        .then((res) => {
          const result = getNumberOfUsage(res.split(","));
          sessionStorage.setItem(
            "overAllUsedTechnologies",
            JSON.stringify({ technologies: result })
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // function wait(ms: number) {
  //   var start = new Date().getTime();
  //   var end = start;
  //   while (end < start + ms) {
  //     end = new Date().getTime();
  //   }
  // }
  return (
    <ProjectContext.Provider
      value={{ overallUsedTechnologies, allProjects, isLoading, fetchProjects }}
    >
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
