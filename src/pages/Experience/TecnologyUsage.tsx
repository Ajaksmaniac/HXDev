import React from "react";
import Table from "react-bootstrap/Table";
import { keyValuePair } from "../../models/project";

const TecnologyUsage = (props: { technologies: any }) => {
  return (
    <>
    <b>Overrall technology usage</b>
    <div className="d-flex" style={{"height": "1%"}}>
    </div>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Used</th>
        </tr>
      </thead>
      <tbody>
        {props.technologies &&
          Object.entries<keyValuePair[]>(props.technologies).map((e) => {
            if (e[0] === "") return false;
            return (
              <tr key={e[0]}>
                <td>{e[0]}</td>
                <td>
                  {e[1]} {Number(e[1]) > 1 ? "Times" : "Time"}
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
    </>
  );

};

export default TecnologyUsage;
