import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useProjects } from "../../store/subject-context";
import { Col, Container, Row } from "react-bootstrap";

import Resume from "./Resume";
import DownloadButton from "../../components/DownloadButton";
const Experience = () => {
  const { isLoading, fetchProjects } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className={"pt-3"}>
          <Row>
            <Col>
              <Resume />
            </Col>
            <Row>
              <DownloadButton />
            </Row>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Experience;
