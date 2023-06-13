import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";
import HeadingSecondary from "../global/typography";
import { at } from "../../utils/queryHelpers";
import { WrapperStyles } from "./styles";
const revealVariant = {
  initial: {
    backgroundPosition: "100%",
  },
  animate: {
    backgroundPosition: "0%",
  },
};
const Element = styled.div`
  width: 60%;
  margin: 0 auto;
  ${WrapperStyles}
  ${at(900, `width:80%;`)}
  ${at(500, `width:90%;`)}
`;
const Para = styled(motion.div)`
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: white;
`;

export default function Description() {
  return (
    <Element>
      <HeadingSecondary counter={1} style={{ marginBottom: "3rem" }}>
        Description
      </HeadingSecondary>
      <Para>
        If you are starting from scratch. Target 100 leetcode problems as a
        number and divide it well across different topics and difficulty levels.
        If you have already practiced some topics (like DP, graph) you can
        reduce the number for that topic. Overall I solved 200 Questions on
        leetcode.
      </Para>
    </Element>
  );
}
