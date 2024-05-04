// Projects.js
import React from "react";
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
function Projects() {

    const ProjectCards = ({src, href, info, span1, span2, title }) => {
        return (
          <Card>
                    <Card.Img  src={src}
                         alt="Project Preview Screenshot" className="card-img" />
                            <Card.Title>
                              {title}
                                <Card.Link href={href}>link</Card.Link>
                            </Card.Title>
                    <Card.Body >
                        <Card.Info>
                            <span>{span1}</span>
                            <span>{span2}</span>
                        </Card.Info>
                        <Card.Text >
                    {info}
                        </Card.Text>
                    </Card.Body>
                </Card>
        );
    }

  return (
    <div className="main-container project-section">
      <section id='projects' className="projects">
        <div className="page-title">
          <img
            src="https://i.postimg.cc/Vk99fDzV/Whats-App-Image-2024-05-02-at-01-39-11.jpg"
            alt="Code Icon"
          />
          <h2>
            my <span className="pink">projects</span>
          </h2>
        
        </div>
        <p className="section-description">
          See 
          <a className="hyperlink" href="https://github.com/michuyim">
            my GitHub profile 
          </a>
          for more details.
        </p>
<div className="project-cards-container">  <i>
            section to be uploaded later
          </i>
       </div>
      </section>
    </div>
  );
}

export default Projects;
