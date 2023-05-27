import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lucas-prestes-a59304253/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/lucasprestes.pestes/" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/lucasprestesprestes/?hl=pt-br" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Portifolio Lucas!</p>
            <p>Email: lucasprestes407809@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
