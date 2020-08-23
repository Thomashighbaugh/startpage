import React from "react";
import styles from "../../styles/Home.module.css";

import styled from 'styled-components'

const FootWrap = styled.footer`
  width: 100%;
  height: 20px;
    display: flex;
  justify-content: center;
  align-items: center;
`

export default function Footer() {
    return(
    <footer className={styles.footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
    </footer>
    )

}