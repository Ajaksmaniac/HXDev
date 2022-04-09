import { useState, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import ProjectModel from "../models/project";
import { getProjectLanguages } from "../util/ProjectUtil";

const ProjectCard = ({
  name,
  description,
  clone_url,
  image,
  languages_url,
}: ProjectModel) => {
  const [languages, setLanguages] = useState([] as string[]);

  useEffect(() => {
    (async () => {
      setLanguages(await getProjectLanguages(languages_url));
    })();
  }, []);

  if (languages[0] == null) {
    setLanguages(["unknown"]);
  }

  if (!description) {
    description = "No Description";
  }

  return (
    <Card
      className="mb-4"
      bg={"dark"}
      style={{
        width: "18dp",
        height: "240px",
        color: "white",
      }}
    >
      <Card.Header>
        <Card.Title>
          <Card.Link
            href={clone_url}
            style={{
              textDecoration: "none",
            }}
          >
            {name}
          </Card.Link>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>Made with</Card.Title>
        {languages &&
          Array.isArray(languages) &&
          languages?.map((language) => {
            return (
              <Badge bg="dark" key={language}>
                {language}
              </Badge>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
