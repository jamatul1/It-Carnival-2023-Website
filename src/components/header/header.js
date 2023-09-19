import React from "react";
import { styled } from "styled-components";
import FeatherIcon from "feather-icons-react";

import Nav from "../nav/nav";
import { at } from "../../utils/queryHelpers";
import { Button } from "../btn/btn";
import { motion } from "framer-motion";
import logo from "../../imgs/icons/logo_w.png";
import { Link } from "gatsby";
const Element = styled(motion.header)`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 100000;
  // background: linear-gradient(to right, #3f5efb, #fc466b);
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
  a {
    text-decoration: none;
  }
`;
const Logo = styled.div`
  font-weight: 700;
  color: white;
  ${at(800, `flex-grow:1;`)};
  img {
    height: 42px;
    object-fit: cover;
    border-radius: 10px;
  }
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

const headerVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      delayChildren: 0.3,
      ease: "easeIn",
    },
  },
};
export default function Header({ formLink }) {
  return (
    <Element variants={headerVariant} initial={"initial"} animate={"animate"}>
      <Wrapper>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        {/* <RegiBtn>
          <FeatherIcon size={16} icon="clipboard" /> Registration
        </RegiBtn> */}
        {formLink && (
          <a href={formLink}>
            <Button>
              <FeatherIcon size={18} icon="git-merge"></FeatherIcon> Register
            </Button>
          </a>
        )}
      </Wrapper>
    </Element>
  );
}
