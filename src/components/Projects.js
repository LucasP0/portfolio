import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// IMPORTAÇÃO DE IMGS

import { projects } from "../data/FetchProjects";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>Esta área é dedicada a projetos atuais e futuros desenvolvidos por mim </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item >
                        <Nav.Link className="pointer" eventKey="first">Front End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="pointer" >
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item >
                      <Nav.Item className="pointer" >
                        <Nav.Link eventKey="third">Back End</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h1 id="P-Next">Em breve mais projetos!!!</h1>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1 id="P-Next">Em breve mais projetos!!!</h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
