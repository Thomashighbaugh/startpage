import React from "react";
import styled from "styled-components";

const FootWrap = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const FootImg = styled.img`
  min-width: 5rem;
  max-height: 5rem;
  align-content: center;
  align-self: center;
  justify-content: center;
  justify-self: center;
`;

export default function Footer() {
  return (
    <FootWrap className="align-content-center justify-content-center ">
      <a href="https://thomasleonhighbaugh.me" target="_blank">
        <FootImg src="/logo.png" alt="Vercel Logo" />
      </a>
    </FootWrap>
  );
}
