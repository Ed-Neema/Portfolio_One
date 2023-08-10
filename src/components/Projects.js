import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const devProjects = [
    {
      title: "City Delivery",
      description: "Development",
      imgUrl: projImg4,
      link: "https://food-web-application.vercel.app/",
    },
    {
      title: "Movie Hub",
      description: "Development",
      imgUrl: projImg2,
      link: "https://moviehub-ed-neema.vercel.app/",
    },
    {
      title: "BestEats",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://best-eats-flax.vercel.app/",
    },
    {
      title: "Chillflix",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://best-eats-flax.vercel.app/",
    },
  ];
  const UIprojects = [
    {
      title: "FoodFest Delivery",
      description: "UI Design",
      imgUrl: projImg4,
      link: "https://www.figma.com/proto/MIA9eUSZoUbNCbhhpzHIUw/HCI_FoodFest_Deliveries?node-id=58-4358&starting-point-node-id=58%3A4358",
    },
    {
      title: "KrankoGigs Jobs",
      description: "UI Design",
      imgUrl: projImg5,
      link: "https://www.figma.com/proto/OOwpuXhvYnQqPiFaQDTmQ5/KrankoGigs_Project?node-id=56-240&starting-point-node-id=67%3A542",
    },
    {
      title: "Coursify LMS",
      description: "UI Design",
      imgUrl: projImg6,
      link: "https://www.figma.com/proto/678fu2KtrqwnsiwEf348cC/HCI_Coursify_UI?node-id=38-305&starting-point-node-id=38%3A305",
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Take a look at some of the Projects I have Designed and/or
                    Built
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Development Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Cloud Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {devProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {UIprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          {" "}
                          Projects in Progess! Check back in a few 😉
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
