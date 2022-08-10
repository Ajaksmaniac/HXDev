import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useProjects } from "../../store/subject-context";
import TecnologyUsage from "./TecnologyUsage";
import { Col, Container, Row } from "react-bootstrap";
import Resume from "./Resume";

const Experience = () => {
  const { allProjects, isLoading, fetchProjects, overallUsedTechnologies } =
    useProjects();

  useEffect(() => {
    fetchProjects();
  });

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className={"pt-3"}>
          <Row>
            <Col xs className="col-sm-3">
              {allProjects.length && overallUsedTechnologies && (
                <TecnologyUsage technologies={overallUsedTechnologies} />
              )}
            </Col>
            <Col xs className="col-sm-1">
              <div className="d-flex" style={{ height: "100%" }}>
                <div className="vr"></div>
              </div>
            </Col>

            <Col>
              <Resume />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Experience;
