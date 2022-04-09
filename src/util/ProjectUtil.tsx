import axios from "axios";

export const getProjectLanguages = (url: string) => {
  return axios.get(url).then((res) => {
    return Object.keys(res.data);
  });
};
