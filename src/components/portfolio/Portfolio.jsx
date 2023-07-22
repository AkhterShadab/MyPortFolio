/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/Slac.webp';
import IMG3 from '../../assets/Sorting.png';
import IMG1 from '../../assets/Amazon_Clone.jpg';

function portfolio() {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image-1" />
          </div>
          <h3>Amazon Clone With Integrated Payment Gateway</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="__blank">
              GitHub
            </a>
            <a
              href="https://clone-8affc.web.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Image-1" />
          </div>
          <h3>Slack Clone with ReactJS</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AkhterShadab/Slack-Clone"
              className="btn"
              target="__blank"
            >
              GitHub
            </a>
            <a
              href="https://slack-clone-8ca9f.web.app/room/QKKkmVPa0D7ONVIeMkb6"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Image-1" />
          </div>
          <h3>Sorting Visualizer App DSA</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="__blank">
              GitHub
            </a>
            <a
              href="https://sorting-visualizer-web-app.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Image-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="__blank">
              GitHub
            </a>
            <a href="#" className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Image-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="__blank">
              GitHub
            </a>
            <a href="#" className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Image-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="__blank">
              GitHub
            </a>
            <a href="#" className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default portfolio;
