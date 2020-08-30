import styled from "styled-components";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaAws,
  FaBitbucket,
  FaCodepen,
  FaCreativeCommonsSamplingPlus,
  FaDigitalOcean,
  FaDropbox,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinux,
  FaReddit,
  FaRedditSquare,
  FaYoutube,
} from "react-icons/fa/index";
import {
  SiArchlinux,
  SiCodesandbox,
  SiFirebase,
  SiGooglecloud,
  SiGenius,
  SiGentoo,
} from "react-icons/si/index";
const ModalBackground = styled.div`
  background: #292d35;
  color: #efeeff;
`;

const Cards = styled.div`
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 15px;
  transition: color 1.5s ease, border-color 1.5s ease;
  background: #292d35;
`;
const Title = styled.h3`
  font-weight: 900;
  font-size: 3rem;
  text-shadow: #939597 0.2rem 0.17rem;
`;
const StyledButton = styled.button`
  background: #292d35;
  font-weight: 900;
  font-size: 3rem;
  padding-top: 0;
  padding-bottom: o;
  masrgin: 1rem;
`;

export default function ModalMenu(props) {
  return (
    <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
      <ModalBackground>
        <Modal.Header>
          <Title className="modal-title" id="contained-modal-title-vcenter">
            Quick Links
          </Title>
          <StyledButton className="btn float-right" onClick={props.onHide}>
            x
          </StyledButton>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col>
                <Cards className="btn">
                  <a href="https://gitlab.com">
                    <FaGitlab size={60} />
                  </a>
                </Cards>
              </Col>

              <Col>
                <Cards className="btn">
                  <a href="https://github.com">
                    <FaGithub size={60} />
                  </a>
                </Cards>{" "}
              </Col>

              <Col>
                <Cards className="btn">
                  <a href="https://codepen.com">
                    <FaCodepen size={60} />
                  </a>
                </Cards>{" "}
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://codesandbox.io">
                    <SiCodesandbox size={60} />
                  </a>
                </Cards>{" "}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Cards className="btn">
                  <a href="https://reddit.com">
                    <FaReddit size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://instagram.com">
                    <FaInstagram size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://dropbox.com">
                    <FaDropbox size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://youtube.com">
                    <FaYoutube size={60} />
                  </a>
                </Cards>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Cards className="btn">
                  <a href="https://aws.com">
                    <FaAws size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://digitalocean.com">
                    <FaDigitalOcean size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://cloud.google.com/">
                    <SiGooglecloud size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://firebase.google.com/">
                    <SiFirebase size={60} />
                  </a>
                </Cards>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Cards className="btn">
                  <a href="https://wiki.archlinux.org/">
                    <SiArchlinux size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://distrowatch.com">
                    <FaLinux size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://www.pling.com/">
                    <FaCreativeCommonsSamplingPlus size={60} />
                  </a>
                </Cards>
              </Col>
              <Col>
                <Cards className="btn">
                  <a href="https://wiki.gentoo.org/wiki/Handbook:Main_Page">
                    <SiGentoo size={60} />
                  </a>
                </Cards>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </ModalBackground>
    </Modal>
  );
}
