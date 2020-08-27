import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/Clock/Clock";
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";
import {FaGithubAlt} from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi";
import {RiMenu5Line} from "react-icons/ri";

const GridStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 100vw;
  margin-top: 3rem;
`

const Cards = styled.div`
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 15px;
  transition: color 1.5s ease, border-color 1.5s ease;
  background: #292d35;
`

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Home // Startpage </title>
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <Clock />

          <GridStyles className="btn-group">

              <Cards className="btn"><a href="https://nextjs.org/docs" className={styles.card}>

                  <RiMenu5Line size={75}/>
              </a></Cards>

              <Cards className="btn"><a href="https://mail.zoho.com" className={styles.card}>
                  <HiOutlineMailOpen size={75}/> &rarr;
              </a></Cards>

              <Cards className="btn"><a
                  href="https://github.com/Thomashighbaugh"
                  className={styles.card}
              >
                  <FaGithubAlt size={75}/> &rarr;
              </a></Cards>
              <Cards className="btn">
                  <a
                      href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      className={styles.card}
                  >

                  </a>
              </Cards>
          </GridStyles>
      </main>

<Footer />
    </div>
  );
}
