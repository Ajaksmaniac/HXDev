import axios, { AxiosPromise } from "axios";
import { keyValuePair } from "../models/project";

export const getProjectLanguages = (url: string) => {
  return axios.get(url).then((res) => {
    return Object.keys(res.data);
  });
};

export const fetchAllProjectLanguages = (list: Promise<AxiosPromise>[]) => {
  return axios
    .all(list)
    .then(
      axios.spread((...responses) => {
        return responses.reduce((acc: any, res: any, i) => {
          return (acc += Object.keys(res.data) + ",");
        }, []);
      })
    )
    .catch((err) => {
      throw Error(err);
    });
};

export const getNumberOfUsage = (technologies: string[]): keyValuePair[] => {
  return technologies.reduce(function (acc: any, curr: any) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc; // eslint-disable-line
  }, {});
};
