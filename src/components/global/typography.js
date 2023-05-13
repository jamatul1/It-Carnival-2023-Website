import { styled } from "styled-components";
import { at } from "../../utils/queryHelpers";
import { motion } from "framer-motion";

export const HeadingSecondary = styled(motion.h2)`
  font-size: 4.7rem;
  font-weight: 400;
  padding-left: 8rem;
  line-height: 1.2;
  text-align: center;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 0) 50%
  );
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${at(800, `font-size: 4rem; padding-left: 2rem;`)}
  ${at(600, `font-size: 3.8rem; padding-left: 2rem;`)}
${at(500, `font-size: 3.6rem; padding-left: 1rem;`)}
`;

export const HeadingSecondaryE = styled(motion.h2)`
  font-size: 4.7rem;
  font-weight: 400;

  line-height: 1.2;
  text-align: center;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0) 50%
  );
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${at(800, `font-size: 4rem; `)}
  ${at(600, `font-size: 3.8rem; `)}
${at(500, `font-size: 3.6rem;`)}
`;
