import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Link from "next/link";
const TopNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Nav.Item>
      <Link href="/">
        <Navbar.Brand href="/">Progress Hub</Navbar.Brand>
      </Link>
    </Nav.Item>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default TopNav;
