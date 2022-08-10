import { useEffect, useState } from "react";
import { useProjects } from "../../store/subject-context";
import { Container, Spinner } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";

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
          <>
            {allProjects &&
              allProjects.length > 0 &&
              allProjects.map((proj) => {
                return (
                  <div className="col-sm-4" key={proj.id}>
                    <ProjectCard
                      id={proj.id}
                      name={proj.name}
                      description={proj.description}
                      clone_url={proj.clone_url}
                      languages_url={proj.languages_url}
                      image="asd"
                    />
                  </div>
                );
              })}
          </>
        )}
      </div>
    </Container>
  );
};

export default ProjectList;
