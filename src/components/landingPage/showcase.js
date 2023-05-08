import React from "react";
import { styled } from "styled-components";
import MagicalText from "../magicalText/magicalText";
import FireWorks from "../firework/firework";
import ParticleText from "../particleText/particleText";
import { at } from "../../utils/queryHelpers";

const FireworkWrapper = styled.div`
  position: absolute;
  z-index: 10000;
`;
const MagicalTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(100%, -50%);
`;
const Element = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  weight: 100vw;
`;

const ParticlesWrapper = styled.div`
  position: aboslute;
  top: 0;
  left: 0;
  z-index: -100;
`;

const Subtitle = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  word-spacing: 0.5rem;
  letter-spacing: 1.2px;
  position: absolute;
  line-height: 1.2;
  top: 40%;
  ${at(825, `top: 35%;`)}
  ${at(572, `top: 28%;`)}
 
  left: 50%;
  transform: translate(-50%, -50%);
  bold {
    font-weight: bold;
  }
  span {
    color: ${(p) => p.theme.pc};
  }
`;
export default function Showcase() {
  return (
    <Element>
      <FireworkWrapper>
        <FireWorks />
      </FireworkWrapper>
      <ParticlesWrapper>
        <Subtitle>
          Welcome to the <bold>PSTU CSE CLUB</bold> <span>Presents</span>{" "}
        </Subtitle>
        <ParticleText />
      </ParticlesWrapper>
    </Element>
  );
}
