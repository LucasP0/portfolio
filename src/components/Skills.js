import htmlImg from "../assets/img-skills/html.png";
import React from "../assets/img-skills/react-logo.png";
import JS from "../assets/img-skills/js.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Minhas Habilidades como desenvolvedor se baseia nas seguintes<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={React} alt="React" />
                                <h5>React</h5>
                                <h5>Júnior</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="JS" />
                                <h5>JavasScript</h5>
                                <h5>Júnior</h5>
                            </div>
                            <div className="item">
                                <img src={htmlImg} alt="HTML" />
                                <h5>HTML</h5>
                                <h5>Pleno</h5>
                            </div>
                            <div className="item">
                                <img src={htmlImg} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={htmlImg} alt="Node.js" />
                                <h5>Node.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
