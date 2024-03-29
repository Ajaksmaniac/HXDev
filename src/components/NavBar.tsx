import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/HXDev">HXDev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/projects">Projects</Nav.Link>
            <Nav.Link href="#/experience">Experience</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
