import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import connectverse from "../../Assets/Projects/connectverse.png";
import Gtimes from "../../Assets/Projects/gtimes.png";
import saisloka from "../../Assets/Projects/saisloka.png";
import WakeupMakeup from "../../Assets/Projects/wakeupmakeup.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import Garuda from "../../Assets/Projects/garuda.png";

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
              imgPath={WakeupMakeup}
              isBlog={false}
              title="WakeupMakeup"
              description="wakeupmakeup is a website made for a individual client who is in need of advertising their services to the people.This website is made with the help of wordpress."
              ghLink="https://wordpress.com/home/wakeupmakeup775248783.wordpress.com"
              demoLink="https://wakeupmakeup775248783.wordpress.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Garuda}
              isBlog={false}
              title="Garuda Technology"
              description="GarudaTechnology is the website made for our own startup company named garuda with the help of the html css and php."
              ghLink="https://github.com/GarudaTechDev/GarudaTechnologyWebsite"
              demoLink="https://www.garudatechnology.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saisloka}
              isBlog={false}
              title="Saisloka"
              description="Saisloka is a website made for the sai academy where they teach  holy Bhagavat Gita, classical music, and dance – all our cultural arts online.It was made with the react js and node js."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.saislokaonline.com/ "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectverse}
              isBlog={false}
              title="Connectverse"
              description="Connectverse is a platform where the government and the unskilled people gets connected thorugh the educated or skilled person and the unskiled worker gets their job through this people.We used react js, spring boot etc..for bulding this platform."
              ghLink="https://github.com/smlogsubramani/Connectverse-sih"
              demoLink="https://connectverse.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Revanth-portfolio"
              description="Portfolio website used in interviews and other competitive by the person, which is build using html and css "
              ghLink="https://github.com/smlogsubramani/revanth-portfolio"
              demoLink="https://revanth2002.github.io/ndrevanth09/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gtimes}
              isBlog={false}
              title="Gtimes"
              description="This is a e-commerce cart page just created to work handson in angularjs"
              ghLink="https://github.com/smlogsubramani/G-times"
              demoLink="https://smlogsubramani.github.io/G-times/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
