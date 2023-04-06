import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img-project/img 21.png";
import breve from "../assets/img-project/breve.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Login",
      description: "Pagina de Login com React",
      imgUrl: projImg1,
      link: "https://incandescent-vacherin-5c77a3.netlify.app/",
    },
    {
      title: "Em Breve",
      description: "Novos sites virão",
      imgUrl: breve,
      link: "https://www.google.com/search?q=next.js+logo+png&&tbm=isch&ved=2ahUKEwik367hnP39AhXACbkGHXPWDDsQ2-cCegQIABAA&oq=next.js+logo+png&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzoECCMQJzoGCAAQBxAeOgQIABAeOgcIABCKBRBDOgUIABCABDoGCAAQHhATOggIABAFEB4QE1CEBlikF2CQGGgAcAB4AIABpwGIAbETkgEEMC4xNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=iCEiZKT7GMCT5OUP86yz2AM&bih=476&biw=1095#imgrc=Lkw1ZDnp02nwqM",
    },
    {
      title: "Em Breve",
      description: "Novos sites virão",
      imgUrl: breve,
    },
    {
      title: "Em Breve",
      description: "Novos sites virão",
      imgUrl: breve,
    },
    {
      title: "Em Breve",
      description: "Novos sites virão",
      imgUrl: breve,
    },
    {
      title: "Em Breve",
      description: "Novos sites virão",
      imgUrl: breve,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
