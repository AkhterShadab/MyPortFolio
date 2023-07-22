/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import ME from '../../assets/Shadab_4-3_copy-min.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
function about() {
  return (
    <section id="about">
      <h4>Get to Know</h4>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4>Clients</h4>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h4>Projects</h4>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            I am a highly skilled Full Stack developer with extensive experience
            in cutting-edge technologies such as ReactJS, TypeScript,
            JavaScript, Redux, NodeJS, ExpressJs, and MongoDB. Having had the
            opportunity to work with industry giants like PayPal, Microsoft, and
            TCS, I have honed my abilities to deliver top-notch solutions. My
            passion for innovation drives me to continuously push the boundaries
            of web development, ensuring exceptional results for my clients.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
