import React from "react";
import { Card } from "react-bootstrap";
import ProjectModel from "../models/project";

const ProjectCard = ({ name, description, link, image }: ProjectModel) => {
  return (
    <Card
      className="mb-2"
      bg={"dark"}
      style={{ width: "18dp", height: "60dp", paddingTop: "30dp" }}
    >
      <Card.Header>{image}</Card.Header>
      <Card.Body>
        <Card.Title>
          <a href={link}>{name}</a>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
