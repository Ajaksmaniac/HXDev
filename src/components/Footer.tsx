import React, { useEffect, useState } from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import Config from "../config";

const Footer = () => {
  let fullYear = new Date().getFullYear();
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          {!Config.isMobile && (
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-4 h5 mb-0 font-weight-bold">HXDev</span>
            </a>
          )}
          <small className="ml-2">
            &copy; {fullYear} - {fullYear + 1} All Rights Reserved by Aleksandar
            Jovanov.
          </small>
        </CDBBox>

        <CDBBox display="flex">
          <a
            href="https://github.com/Ajaksmaniac"
            className="d-flex align-items-center p-0 text-dark"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandar-jovanov-19b8809b/"
            className="d-flex align-items-center p-0 text-dark"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="linkedin" />
            </CDBBtn>
          </a>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
