import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "black"}} className="text-white">
        <Container>
          <Navbar.Brand className="text-white" href="/">
            <img
              src="https://res.cloudinary.com/delscyuhi/image/upload/v1697939680/xna0rag5wqhfhbkzwryh.png"
              className="mr-2 h-9 sm:h-9 d-inline-block align-top"
              alt="Logo"
              width="35"
              height="35"
            />
            Bro's Hot Chicken
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
