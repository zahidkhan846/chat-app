import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../images/logo512.png";

function Header() {
  return (
    <Container
      className="d-flex w-100 bg-dark text-light justify-content-center align-items-center"
      style={{
        height: "60px",
        maxWidth: "100%",
        borderBottom: "2px solid #d3c614",
      }}
    >
      <img src={logo} style={{ height: "50px", padding: "5px 0" }} alt="CWZ" />
    </Container>
  );
}

export default Header;
