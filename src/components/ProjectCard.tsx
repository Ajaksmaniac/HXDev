import React from "react";
import { Badge, Card } from "react-bootstrap";
import ProjectModel from "../models/project";

const ProjectCard = ({ name, description, clone_url, image }: ProjectModel) => {
  return (
    <Card
      className="mb-2"
      bg={"dark"}
      style={{
        width: "18dp",
        height: "60dp",
        paddingTop: "30dp",
        color: "white",
      }}
    >
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>

      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={clone_url}>
          <Badge bg="dark">GitHub</Badge>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
