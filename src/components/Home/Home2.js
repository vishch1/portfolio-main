import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <b className="purple">Vishakha Chaudhary</b>, a Computer
              Science student passionate about building intelligent applications
              and solving real-world problems using technology.
              <br />
              <br />
              I enjoy working with technologies like
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, React.js, and Machine Learning
                </b>
              </i>
              and I love exploring how AI can be used to create meaningful and
              impactful solutions.
              <br />
              <br />
              My main areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Artificial Intelligence, Data Science, and Full-Stack
                  Development
                </b>
              </i>
              where I build projects that combine intelligent models with
              user-friendly interfaces.
              <br />
              <br />
              I have worked on projects like
              <b className="purple">
                {" "}
                AI Health Chatbots, Classroom Voice Analyzer, and Smart
                Shopping AI
              </b>{" "}
              and I enjoy continuously learning new technologies to improve my
              development and problem-solving skills.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;