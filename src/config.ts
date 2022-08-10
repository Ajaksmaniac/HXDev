import pack from "../package.json";
import mobile from "is-mobile";
const Config = {
  repositoryUrl: pack.repository.url,
  fetchAccountRepositoriesUrl: `https://api.github.com/users/!${pack.author.name}/repos`,
  isMobile: mobile(),
};

export default Config;
