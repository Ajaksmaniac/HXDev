import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import ProjectModel from "../models/project";
import { getProjectLanguages } from "../util/ProjectUtil";
import Config from "../config";

const ProjectTableRow = (props: { project: ProjectModel; id: number }) => {
  const [languages, setLanguages] = useState([] as string[]);

  useEffect(() => {
    (async () => {
      setLanguages(await getProjectLanguages(props.project.languages_url));
    })();
  }, []); // eslint-disable-line

  if (languages[0] == null) {
    setLanguages(["unknown"]);
  }

  if (!props.project.description) {
    props.project.description = "No Description";
  }

  return (
    <tr key={props.project.name}>
      <td>
        <a
          href={props.project.clone_url}
          style={{
            textDecoration: "none",
          }}
        >
          <b>{props.project.name}</b> <br></br>
          {Config.isMobile &&
            languages &&
            Array.isArray(languages) &&
            languages?.map((language) => {
              return (
                <Badge bg="dark" key={language} className={"m-1 p-1"}>
                  {language}
                </Badge>
              );
            })}
        </a>
      </td>
      {!Config.isMobile && <td>{props.project.description}</td>}

      {!Config.isMobile && (
        <td>
          {languages &&
            Array.isArray(languages) &&
            languages?.map((language) => {
              return (
                <Badge bg="dark" key={language} id={language}>
                  {language}
                </Badge>
              );
            })}
        </td>
      )}
    </tr>
  );
};

export default ProjectTableRow;
