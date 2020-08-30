import React from "react";
import styles from "../../styles/Home.module.css";

import styled from "styled-components";
import { FaGithubAlt } from "react-icons/fa";

const FootWrap = styled.footer`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <footer className="row align-content-center justify-content-center ">
      <div className="col col-6 d-block align-content-center justify-content-center">
        <a href="https://thomasleonhighbaugh.me" target="_blank">
          <img src="/logo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
        <h6 className="text-white">Thomas Leon Highbaugh</h6>
      </div>

      <div className="col-6 align-content-center justify-content-center">
        <a href="https://github.com/THomashighbaugh/startpage">
          <img src="/github.png" alt="github logo" />{" "}
        </a>
        <h6 className="text-white">Source Code</h6>
      </div>
    </footer>
  );
}
