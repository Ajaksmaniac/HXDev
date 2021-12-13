import ProjectModel from "../models/project";

export const FETCH_PROJECTS_PENDING = "FETCH_PROJECTS_PENDING";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR";

export function fetchProjectsPending() {
  return {
    type: FETCH_PROJECTS_PENDING,
  };
}

export function fetchProjectsSuccess(projects: ProjectModel[]) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    subjects: projects,
  };
}

export function fetchProjectsError(error: Error) {
  return {
    type: FETCH_PROJECTS_ERROR,
    error: error,
  };
}
