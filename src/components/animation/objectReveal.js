import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";

const Reveal = styled(motion.div)`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 25%,
    // ${(p) => p.theme.wc} 50%
  );
  background-size: 300%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 0.5s;
  background-position: 100%;
`;
const revealVariant = {
  initial: {
    backgroundPosition: "100%",
  },
  animate: {
    backgroundPosition: "0%",
  },
};
export default function ObjectReveal({ children, width = "100%" }) {
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <motion.div ref={ref} style={{ position: "relative", width }}>
      <motion.div>{children}</motion.div>
      <Reveal
        variants={revealVariant}
        initial={"initial"}
        animate={inView ? "animate" : "initial"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      ></Reveal>
    </motion.div>
  );
}
