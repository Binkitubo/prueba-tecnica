import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
{/*               <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              /> */}
              {" "}VapeMe
            </Navbar.Brand>
          </Link>
          <Link to="/login">
          <Button variant="primary">Sign In</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
