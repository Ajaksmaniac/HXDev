import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import resumePath from "./../../assets/Experience.md";
import Image from "react-bootstrap/Image";
import profilePicture from "./../../assets/profile_picture.jpg";
import { Col, Row } from "react-bootstrap";
const Resume = () => {
  let [file, setFile] = useState("");

  useEffect(() => {
    fetch(resumePath)
      .then((res) => res.text())
      .then((md) => {
        setFile(md);
      });
  }, []);

  return (
    <div className="content resume row g-2 ">
      <div className="col-md-1 border-end border-2 border-primary">
        <p style={{ fontSize: 9 }}>
          Updated on: <b>17.12.2022</b>
        </p>
      </div>
      <div className="col-md-10">
        <Row>
          <Col>
            <Image src={profilePicture} rounded={true} height={"120px"}></Image>
          </Col>
          <Col>
            <p>
              Phone: <b>611163700</b>
            </p>
            <p>
              Email: <b>611163700</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMarkdown children={file} />{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Resume;
