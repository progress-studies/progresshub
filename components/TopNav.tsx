import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
const TopNav = () => (
  <>
    <Head>
      <meta name="Description" content="Progress Hub" />
      <meta name="author" content="Jose Luis Ricon & Jasmine Wang" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>Progress Hub</title>
    </Head>

    <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
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
    <style jsx global>{`
      #navbar {
        background-color: #50a;
      }
      .nav-link {
        opacity: 0.9;
      }
    `}</style>
  </>
);
export default TopNav;
