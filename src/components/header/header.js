import React from "react";
import { styled } from "styled-components";
import Nav from "../nav/nav";

const Element = styled.header``;
const Wrapper = styled.div`
  height: 7rem;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: 400;
`;
const RegiBtn = styled.button``;

export default function Header() {
  return (
    <Element>
      <Wrapper>
        <Logo>Logo here</Logo>
        <Nav />
        <RegiBtn>Register</RegiBtn>
      </Wrapper>
    </Element>
  );
}
