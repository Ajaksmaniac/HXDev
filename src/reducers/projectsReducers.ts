import {
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_PENDING,
  FETCH_PROJECTS_SUCCESS,
} from "../actions/projectActions";

import ProjectModel from "../models/project";

const initialState = {
  pending: false,
  projects: [] as unknown as ProjectModel[],
  error: null,
};

export function projectsReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_PROJECTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: action.payload,
      };
    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getProjects = (state: { projects: ProjectModel[] }) =>
  state.projects;
export const getProjectsPending = (state: { pending: any }) => state.pending;
export const getProjectsError = (state: { error: any }) => state.error;
