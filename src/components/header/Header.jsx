import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Shadab_3-removebg.png';
import HeaderSocials from './HeaderSocials';

export default function header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Shadab Akhtar</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className="scroll_down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
}
