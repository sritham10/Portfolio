import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/83761482?s=400&u=9a603d091c17dddf57bb58405b921a95a5b756ae&v=4"}
          alt="Founder"
        />

        <h2>Sritham Choudhury</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/srithamchoudhury/" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://www.instagram.com/_s.r.i.t.h.a.m_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/sritham10" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;