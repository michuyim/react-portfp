import React from "react";
import "../style/style.css";

export const AboutSection = () => {
  return (
    <>
      <section id="profile">
        <div className="page-title">
          <img
            src="https://i.postimg.cc/Vk99fDzV/Whats-App-Image-2024-05-02-at-01-39-11.jpg"
            alt="Smile Icon"
          />
          <h2>
            my <span className="pink">profile</span>
          </h2>
        </div>
        <p className="section-description">
          what i want you to know about me...
        </p>
        <div className="profile-container">
          <div className="me-icon-container">
            <img
              className="me-icon"
              src="https://i.postimg.cc/B6nBwH9w/Whats-App-Image-2024-05-02-at-01-39-08.jpg"
              alt="Icon of myself"
              title="This is an icon of me"
            />
          </div>
          <div className="terminal-container">
            <div className="terminal-header">
              <div id="terminal-title">michuyim_</div>
              <div className="right-side-buttons">
                <i className="fa-solid fa-window-minimize"></i>
                <i className="fa-solid fa-window-restore"></i>
                <i className="fa-solid fa-window-close"></i>
              </div>
            </div>
            <div className="terminal-window">
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">pronouns</span>
                </p>
                <p className="return">he/him</p>
              </div>
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">birthday</span>
                </p>
                <p className="return">14th November</p>
              </div>
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">location</span>
                </p>
                <p className="return">Rivers, Nigeria</p>
              </div>
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">university</span>
                </p>
                <p className="return">Rivers State University</p>
              </div>
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">whatsapp</span>
                </p>
                <p className="return">+234 8034694162</p>
              </div>
              <div className="statement">
                <p className="input">
                  michuyim/<span className="green">instagram</span>
                </p>
                <p className="return">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/michuyim/"
                    className="hyperlink"
                  >
                    Michuyim-IG
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education-experience">
        <div id="education" className="profile-container">
          <h3>Education</h3>
          <div className="me-icon-container">
            <img
              src="https://i.postimg.cc/QMbqbSPT/Whats-App-Image-2024-05-02-at-01-39-09-4.jpg"
              alt="edu"
              className="me-icon"
            />
          </div>
          <div className="education-experience-card">
            <div className="card-info">
              <h4 className="green">B.Eng in Mechanical Engineering</h4>
              <p>Rivers State University of Science</p>
            </div>
          </div>
        </div>
        <div id="experience" className="profile-container">
          <h3>Experience</h3>
          <div className="me-icon-container">
            <img
              src="https://i.postimg.cc/LswMkn6d/image.png"
              alt="icon"
              className="me-icon"
            />
          </div>

          <div className="education-experience-card">
            <div className="card-info">
              <h4 className="green">Web Development (react & javascript)</h4>
              <p>
                Develop and execute comprehensive test plans and test cases for
                manual functional, end-to-end, and regression testing of web
                applications, ensuring adherence to software requirements and
                acceptance criteria.
              </p>
              <p>
                Collaborate with cross-functional teams, including software
                developers, product managers, and UX designers, throughout the
                SDLC to ensure high-quality delivery of software features,
                updates, and bug fixes.
              </p>
              <h4 className="green">
                DNS Configuration, Automation & Management
              </h4>
              <p>
                Automate regression testing of specific features in production
                and staging environments using DataDog Synthetic Tests.
              </p>
              <h4 className="green">SEO Specialist</h4>
              <p>
                Create and maintain documentation and resources for product
                information, testing tools, and methodologies, helping fellow QA
                engineers and new hires.
              </p>
              <p>and more...</p>
              <p className="date fw-bold">Since Febuary 2023 - Present</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
