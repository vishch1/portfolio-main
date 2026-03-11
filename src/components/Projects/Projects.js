import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import health from "../../Assets/Projects/AI-Chatbot-Healthcare-App.webp";
import aivoice from "../../Assets/Projects/AI-Voice-generator.jpg";
import facemask from "../../Assets/Projects/facemask.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aivoice}
              isBlog={false}
              title="AI Classroom Voice Analyzer"
              description="An AI-powered application that analyzes classroom audio recordings and generates meaningful insights. The system converts speech to text, summarizes discussions, and performs sentiment analysis to understand classroom engagement and interaction patterns. "
              ghLink="https://github.com/vishch1/classroom-voice-analyzer.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="AI Healthcare Chatbot"
              description="An AI-powered chatbot designed to provide healthcare information and support to users. The chatbot uses natural language processing to understand user queries and deliver accurate responses."
              ghLink="https://github.com/vishch1/AI-healthcare-chatbot.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facemask}
              isBlog={false}
              title="Face Mask Detection System"
              description="Developed a real-time face mask detection system using transfer learning. The system detects whether a person is wearing a mask through live webcam feed and provides instant classification results."
              ghLink="https://github.com/vishch1/face-mask-detection.git"
              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
