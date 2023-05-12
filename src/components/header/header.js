import React from "react";
import { styled } from "styled-components";
import FeatherIcon from "feather-icons-react";

import Nav from "../nav/nav";
import { at } from "../../utils/queryHelpers";
import { Button } from "../btn/btn";

const Element = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100000;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
const Wrapper = styled.div`
  height: 6.5rem;
  width: 90%;
  ${at(470, `width:94%`)}
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  ${at(470, `gap: 1rem`)}
`;
const Logo = styled.div`
  font-weight: 700;
  ${at(800, `flex-grow:1;`)};
`;

const NavWrapper = styled.div`
  flex: 2;
  ${at(800, `order:3; flex:0`)}
`;
const RegiBtn = styled.button`
  padding: 0.3rem 1.5rem;
  font: inherit;
  letter-spacing: 1.2px;
  background: ${(p) => p.theme.pc};
  ${at(980, `font-size:1.6rem;padding:0.2rem 1.3rem;`)}
  color: ${(p) => p.theme.dc};
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${at(1024, `order:2;`)}
`;

const BtnWrapper = styled.div`
  flex: 1;
`;
export default function Header() {
  return (
    <Element>
      <Wrapper>
        <Logo>Logo here</Logo>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        {/* <RegiBtn>
          <FeatherIcon size={16} icon="clipboard" /> Registration
        </RegiBtn> */}
        <Button>Register</Button>
      </Wrapper>
    </Element>
  );
}
