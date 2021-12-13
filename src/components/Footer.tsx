import React from "react";
import { Col, Navbar } from "react-bootstrap";

const Footer = () => {
  let fullYear = new Date().getFullYear();
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Col lg={12} className="text-center text-muted">
        <div>
          {fullYear} - {fullYear + 1} All Rights Reserved by Aleksandar Jovanov
        </div>
      </Col>
    </Navbar>
  );
};

export default Footer;
