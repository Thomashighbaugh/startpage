import ModalMenu from "./ModalMenu";
import React, { useState } from "react";
import { FaListAlt } from "react-icons/fa/index";
import styled from "styled-components";

const BTN = styled.div`
  color: #efeeff;
`;

export default function ModalButton(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <BTN>
      <div onClick={() => setModalShow(true)}>
        <FaListAlt size={60} /> &rarr;
      </div>

      <ModalMenu show={modalShow} onHide={() => setModalShow(false)} />
    </BTN>
  );
}
