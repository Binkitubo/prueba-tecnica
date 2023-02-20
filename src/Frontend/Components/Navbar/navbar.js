import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>VapeMe</Navbar.Brand>
          </Link>
          <Button variant="primary" className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Link to="/login">
            <Button variant="primary">Sign In</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
