import React from "react";
import styles from "../../styles/Home.module.css";

import styled from "styled-components";

const FootWrap = styled.footer`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://thomasleonhighbaugh.me" target="_blank">
        <img src="/logo.png" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  );
}
