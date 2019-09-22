import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import TopNav from "../components/TopNav";
const TwitterLink = props => (
  <a href={"https://twitter.com/" + props.username}>{props.name}</a>
);
const About = () => (
  <>
    <TopNav />
    <Container>
      <br />
      <p>
        Progress Hub is a links aggregator that aims to collect in a single
        place all sorts of resources related to Progress Studies
      </p>
      <p>
        It was started by{" "}
        <TwitterLink username="ArtirKel" name="José Luis Ricón" /> and{" "}
        <TwitterLink username="j_asminewang" name="Jasmine Wang" />
      </p>
    </Container>
  </>
);

export default About;
