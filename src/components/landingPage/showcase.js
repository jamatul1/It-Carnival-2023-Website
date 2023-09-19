import React from "react";
import { styled } from "styled-components";
import MagicalText from "../magicalText/magicalText";
import FireWorks from "../firework/firework";
import ParticleText from "../particleText/particleText";
import { at, fCenter } from "../../utils/queryHelpers";
import ScrollDownLogo from "../scrollDownLogo/scrollDownLogo";
import { motion } from "framer-motion";
import { Link } from "feather-icons-react/build/IconComponents";
import VivasoftImg from "../../imgs/icons/herologo.png";
import { sponsors } from "./sponsors/sponsors";
const FireworkWrapper = styled.div`
  position: absolute;
  z-index: 10000;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MagicalTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(100%, -50%);
`;
const Element = styled.div`
  position: relative;
  top: -50px;
  left: 0;

  height: 120vh;
  width: 100%;
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3f5efb, #fc466b);
  background: #ff00cc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff00cc,
    #333399
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff00cc, #333399);
`;

const ParticlesWrapper = styled.div`
  position: aboslute;
  top: 0px;
  left: 0;
  z-index: -100;
`;

const Subtitle = styled(motion.h4)`
  text-align: center;
  font-size: 1.8rem;
  word-spacing: 0.5rem;
  letter-spacing: 1.2px;
  position: absolute;
  line-height: 1.2;
  color: #f4f4f4;
  top: 35%;
  ${at(825, `top: 30%; font-size: 1.8rem;`)}
  ${at(572, `top: 23%; font-size: 1.6rem;`)}
 
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
  bottom: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SponsorsWrapper = styled.div`
  position: absolute;
  top: 50%;
  ${fCenter()}
  gap:2rem;
  flex-direction: column;
  ${at(825, `top: 60%;`)}
  width: 100%;
`;
const STitle = styled(motion.h5)`
  font-size: 1.4rem;
  font-weight: 500;
`;
const Sponsors = styled(motion.div)`
  ${fCenter()}
  width:300px;
  gap: 2rem;
  flex-wrap: wrap;
  ${at(600, `gap:1rem;`)}
`;
const Sponsor = styled.div`
  img {
    height: 4.2rem;
    width: 12.2rem;
    object-fit: cover;
    border-radius: 5px;
    ${at(600, `height:3.6rem;width:3.6rem;`)}
  }
`;
export default function Showcase() {
  return (
    <Element>
      {/* <FireworkWrapper>
        <FireWorks />
      </FireworkWrapper> */}
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
        <SponsorsWrapper>
          <STitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeIn",
            }}
          >
            Sponsored by :
          </STitle>
          <Sponsors
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeIn",
            }}
          >
            {sponsors.map((s, i) => (
              <Sponsor key={i}>
                <img src={s.src} alt={s.name} />
              </Sponsor>
            ))}
          </Sponsors>
        </SponsorsWrapper>
        <ScrollDownWrapper>
          <ScrollDownLogo />
        </ScrollDownWrapper>
      </ParticlesWrapper>
    </Element>
  );
}
