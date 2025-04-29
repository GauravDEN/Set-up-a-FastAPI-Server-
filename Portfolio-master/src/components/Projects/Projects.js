import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png"; // Placeholder image
import leaf from "../../Assets/Projects/leaf.png"; // Placeholder image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Gaurav Chamoli's </strong> Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} // Replace with a relevant image if available
              isBlog={false}
              title="Binary Classification"
              description="A machine learning project for binary classification tasks using various supervised learning models."
              ghLink="https://github.com/GauravDEN/Binary-classification"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf} // Replace with a relevant image if available
              isBlog={false}
              title="ML-APP"
              description="A machine learning application built to demonstrate model deployment, performance, and interaction."
              ghLink="https://github.com/GauravDEN/ML-APP"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
