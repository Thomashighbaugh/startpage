import styled from "styled-components";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaBitbucket,
  FaCodepen,
  FaDropbox,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaReddit,
  FaRedditSquare,
  FaYoutube,
} from "react-icons/fa/index";
import { GrCodeSandbox } from "react-icons/gr/index";
import { SiCodesandbox } from "react-icons/si/index";
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

export default function ModalMenu(props) {
  return (
    <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
      <ModalBackground>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
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
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </ModalBackground>
    </Modal>
  );
}
