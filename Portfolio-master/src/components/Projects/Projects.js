import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div>
        <h3>BankShield Fraud Detection System</h3>
        <p>
          A web-based fraud detection system using HTML, CSS, JavaScript, and AWS services (EC2, Load Balancer, Auto Scaling, WAF)
          to improve scalability and security.
        </p>
        <a href="#">Project Link (Coming Soon)</a>
      </div>
    </div>
  );
};

export default Projects;
