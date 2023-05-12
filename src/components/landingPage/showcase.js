import React from "react";
import { styled } from "styled-components";
import MagicalText from "../magicalText/magicalText";
import FireWorks from "../firework/firework";
import ParticleText from "../particleText/particleText";
import { at } from "../../utils/queryHelpers";
import ScrollDownLogo from "../scrollDownLogo/scrollDownLogo";
import { motion } from "framer-motion";

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
  position: relative;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3f5efb, #fc466b);
`;

const ParticlesWrapper = styled.div`
  position: aboslute;
  top: 0;
  left: 0;
  z-index: -100;
`;

const Subtitle = styled(motion.h4)`
  text-align: center;
  font-size: 2rem;
  word-spacing: 0.5rem;
  letter-spacing: 1.2px;
  position: absolute;
  line-height: 1.2;
  color: #f4f4f4;
  top: 40%;
  ${at(825, `top: 38%; font-size: 1.8rem;`)}
  ${at(572, `top: 30%; font-size: 1.6rem;`)}
 
  left: 50%;
  transform: translate(-50%, -50%);
  .bold {
    font-weight: bold;
    color: ${(p) => p.theme.wc};
  }
  span {
    color: ${(p) => p.theme.pc};
  }
`;

const ScrollDownWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Showcase() {
  return (
    <Element>
      <FireworkWrapper>
        <FireWorks />
      </FireworkWrapper>
      <ParticlesWrapper>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeIn",
          }}
        >
          Welcome to the <span className="bold">PSTU CSE CLUB</span>{" "}
          <span>Presents</span>{" "}
        </Subtitle>
        <ParticleText />

        <ScrollDownWrapper>
          <ScrollDownLogo />
        </ScrollDownWrapper>
      </ParticlesWrapper>
    </Element>
  );
}
