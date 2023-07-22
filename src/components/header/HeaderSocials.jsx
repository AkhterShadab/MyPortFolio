import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/akhtar-shadab/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/AkhterShadab" target="_blank">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/Shadab_Akhtar/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
