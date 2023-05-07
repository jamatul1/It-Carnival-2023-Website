import React from "react";
import { styled } from "styled-components";
import Nav from "../nav/nav";

const Element = styled.header`
  background-color: ${(p) => p.theme.bgc};
`;
const Wrapper = styled.div``;
const Logo = styled.div``;
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
