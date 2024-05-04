// HomeSection.js
import React from "react";
import '../style/style.css';
import { FaMailBulk } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeSection() {
  return (
    <main className="main-container container home-section">
      <section id="home">
        <div className="landing-page-details">
          <h1 className="small-title">Eleyi GodsCourage Ikemsinachi</h1>
          <h2 className="big-title">
            <span className="my-name pink">michuyim_</span>
          </h2>
          <h3 className="medium-title">
            <em>web developer and code programmer</em>
          </h3>
          <div className="short-bio">
            <p>
              I am a Nigerian student aspiring to get better at web development,
              domain management, and social media marketing.
            </p>
          </div>
          <div className="cta-container email-container">
            <a href="mailto:contact@michuyim.uk?" className="cta">
              <FaMailBulk />
              {"   "}
              <span> Say Hello!</span>
            </a>
          </div>
        </div>
        <div className="art-me">
          <img
            src="https://i.postimg.cc/2SnGqC7T/Whats-App-Image-2024-05-02-at-01-39-09-3.jpg"
            alt="art"
          />
        </div>
        <div class="landing-page-socials">
          <ul>
            <li class="social-link">
              <a
                href="https://www.facebook.com/michuyim/"
                aria-label="Facebook"
                rel="noopener"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="social-link">
              <a
                href="https://github.com/michuyim"
                aria-label="GitHub"
                rel="noopener"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li class="social-link">
              <a
                href="https://instagram.com/michuyim"
                aria-label="Instagram"
                rel="noopener"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomeSection;
