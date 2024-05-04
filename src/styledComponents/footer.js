import React from 'react';
import '../style/style.css';
import { FaCopyright } from 'react-icons/fa';


function Footer() {

    const Today = new Date();
    const Year = Today.getFullYear();

   
    function FooterNav({text, href}) {
        return (
            <a href={href} className='footer-button'>{text}</a>
        )
    }
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-column">
            <a href="https://michuyim.uk" className="footer-logo">
              Michuyim dotUK
            </a>
            <div className="socials">
              <ul>
                <li class="social-link">
                  <a
                    href="https://www.facebook.com/michuyim/"
                    aria-label="Facebook"
                   
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  </li><li className='social-link'>
                  <a
                    href="https://www.twitter.com/michuyim/"
                    aria-label="Twitter"
                   
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li class="social-link">
                  <a
                    href="https://github.com/michuyim/"
                    aria-label="GitHub"
                   
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="social-link">
                  <a
                    href="https://instagram.com/michuyim/"
                    aria-label="Instagram"
                   
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <span className="copyright">
              <FaCopyright /> Michuyim x anniew.xyz {Year}
            </span>
          </div>
          <div className="footer-column">
            <FooterNav text='Home' href='/' />
            <FooterNav text="About" href='#profile'/>
            <FooterNav text="Projects" href='#projects' />
            <FooterNav text="Photos" href='#photos' />
            <a href="mailto:contact@michuyim.uk" className="footer-button">
              Email Me
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer;