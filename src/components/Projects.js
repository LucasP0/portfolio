import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// IMPORTAÇÃO DE IMGS
import projImg1 from "../assets/img-project/img 21.png";
import breve from "../assets/img-project/breve.png";
import Responsive from "../assets/img-project/Responsive-side-bar.png"
import Agenda_Ts from "../assets/img-project/Agenda-Ts.png";
import Next_Tailwind from "../assets/img-project/Estilização com Tailwind.png";

export const Projects = () => {

  const projects = [
    {
      title: "Login",
      description: "Pagina de Login com React",
      imgUrl: projImg1,
      link: "https://incandescent-vacherin-5c77a3.netlify.app/",
    },
    {
      title: "Sidebar Menu",
      description: "Responsive Sidebar Menu com JS + dark theme",
      imgUrl: Responsive,
      link: "https://lucasp0.github.io/Responsive-Siderbar-Menu/",
    },
    {
      title: "Agenda de Tarefas",
      description: "Agenda com Ts + React",
      imgUrl: Agenda_Ts,
      link: "https://delightful-creponne-300ef8.netlify.app/",
    },
    {
      title: "Estilização Com Tailwind",
      description: "Um projeto apenas com estilização no next utilizando Tailwind",
      imgUrl: Next_Tailwind,
      link: "https://main--venerable-chimera-3d2007.netlify.app/"
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
                <h2>Projetos</h2>
                <p>Esta área é dedicada a projetos atuais e futuros desenvolvidos por mim </p>
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
