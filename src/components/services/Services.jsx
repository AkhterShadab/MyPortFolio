import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function services() {
  return (
    <section id="services">
      <h4>What I offer</h4>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack Web and Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack Web Hosting and Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build new product features or API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack E-commerce Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Migration and Porting to Full Stack</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perform tests, troubleshoot software, and fix bugs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;
