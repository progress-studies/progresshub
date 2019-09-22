import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TopNav from "../components/TopNav";
import content from "../content/links.json";

interface RichLinkContent {
  href: string;
  title: string;
  author: string;
  date: string;
}
const RichLink = (props: RichLinkContent) => (
  <li>
    <a href={props.href}>{props.title} </a>({props.author}, {props.date})
  </li>
);

const Section = props => (
  <>
    <h3>{props.name}</h3>
    <ul>{props.children}</ul>
  </>
);
const Links = () => (
  <>
    {Object.entries(content).map(([section, links]) => (
      <Section name={section} key={section}>
        {links.map(element => (
          <RichLink
            href={element.href}
            author={element.author}
            date={element.date}
            title={element.title}
            key={section + element.title}
          />
        ))}
      </Section>
    ))}
  </>
);
const Index = () => (
  <>
    <TopNav />
    <Container>
      <br />

      <h2>Progress Studies Bibliography</h2>
      <p>Last updated: 2019-09-22</p>
      <h3>Contents</h3>
      <p>
        The following sections attempt to aggregate the available resources
        published discusing Progress Studies, be it defenses, comments, or
        critiques thereof.
      </p>
      <Links />
    </Container>
  </>
);

export default Index;
