import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DoCure from "../../Assets/Projects/DoCure.png";
import FreshFuel from "../../Assets/Projects/FreshFuel.png";
import OnlineQuizWebApp from "../../Assets/Projects/OnlineQuizWebApp.png";


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
              imgPath={DoCure}
              isBlog={false}
              title="DoCure.ai"
              description="An AI-powered health assistant built with Flask and Python. Features include symptom-based diagnosis, image-based disease detection using deep learning, real-time medical insights, and a user-friendly interface."
              ghLink="https://github.com/SR-Pradhan/DoCure.ai"
              demoLink="https://docureai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnlineQuizWebApp}
              isBlog={false}
              title="OnlineQuizWebApp"
              description="A dynamic web-based quiz application built using JSP, Servlets, and JDBC. Features include user authentication, timed quizzes, score tracking, admin panel for question management, and a responsive UI for seamless user experience."
              ghLink="https://github.com/SR-Pradhan/OnlineQuizWebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FreshFuel}
              isBlog={false}
              title="Fresh Fuel"
              description="A health-focused e-commerce website built using Shopify. Fresh Fuel offers a curated range of gym supplements and nutrition products. Features include product listings, secure checkout, responsive design, and optimized user experience for fitness enthusiasts."
              ghLink="https://github.com/SR-Pradhan/Fresh-Fuel"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
