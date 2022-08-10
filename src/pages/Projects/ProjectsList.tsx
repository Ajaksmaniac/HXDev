import { useEffect, useState } from "react";
import { useProjects } from "../../store/subject-context";
import { Container, Spinner, Table } from "react-bootstrap";
import ProjectTableRow from "../../components/ProjectTableRow";
import Config from "../../config";

const ProjectList = (props: any) => {
  //Project Context
  const { allProjects, isLoading, fetchProjects } = useProjects();

  const [refresh, setRefresh] = useState(false as boolean);

  useEffect(() => {
    (async () => {
      fetchProjects();
      setRefresh(false);
    })();
  }, [refresh]); // eslint-disable-line

  return (
    <Container className="mt-5 mb-10">
      <div className="row">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Table responsive="sm" size={props.isMobile && "sm"}>
            <thead>
              <tr>
                <th>Name</th>
                {!Config.isMobile && <th>Description</th>}
                {!Config.isMobile && <th>Made with</th>}
              </tr>
            </thead>
            <tbody>
              {allProjects &&
                allProjects.length > 0 &&
                allProjects.map((proj, i) => {
                  return (
                    <ProjectTableRow project={proj} key={proj.name} id={i} />
                  );
                })}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default ProjectList;
