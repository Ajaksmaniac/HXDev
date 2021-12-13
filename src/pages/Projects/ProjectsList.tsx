import React, { useEffect, useState } from "react";

import { AxiosError } from "axios";
import { useProjects } from "../../store/subject-context";
import { Container, Spinner } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";

const ProjectList = (props: any) => {
  //Paginator
  // const [page, setPage] = useState(0)
  // const [lastPage, setLastPage] = useState(0)
  // const [size, setSize] = useState(8)

  //Smackbar
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false as boolean);
  // const [snackBarSeverity,setSnackBarSeverity] = useState(''as Color | undefined)
  // const [snackBarMessage,setSnackBarBessage] = useState(''as string)

  //Project Context
  const { allProjects, isLoading, fetchProjects } = useProjects();

  const [refresh, setRefresh] = useState(false as boolean);

  useEffect(() => {
    (async () => {
      console.log(isLoading);

      await fetchProjects();
      console.log(isLoading);
      console.log("AAAA", allProjects);
      setRefresh(false);
    })();
  }, [refresh]);

  return (
    <Container className="mt-5 ">
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
                  <div className="col-sm-4">
                    <ProjectCard
                      id={proj.id}
                      name={proj.name}
                      description={proj.description}
                      clone_url={proj.clone_url}
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
