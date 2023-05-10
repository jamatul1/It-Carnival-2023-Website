import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";
const revealVariant = {
  initial: {
    backgroundPosition: "100%",
  },
  animate: {
    backgroundPosition: "0%",
  },
};
const Element = styled.div`
  width: 80%;
  margin: auto;
  padding: 15rem 0;
`;
const Para = styled(motion.div)`
  font-size: 3.6rem;
  line-height: 1.3;
  font-weight: 300;
  letter-spacing: 1.2px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0) 50%
  );
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Description() {
  const paraRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <Element>
      <Para
        ref={ref}
        variants={revealVariant}
        initial={"initial"}
        animate={inView ? "animate" : "initial"}
        transition={{
          duration: 1,
          ease: "linear",
        }}
      >
        If you are starting from scratch. Target 100 leetcode problems as a
        number and divide it well across different topics and difficulty levels.
        If you have already practiced some topics (like DP, graph) you can
        reduce the number for that topic. Overall I solved 200 Questions on
        leetcode.
      </Para>
    </Element>
  );
}
