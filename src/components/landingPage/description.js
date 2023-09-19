import { motion, useInView, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
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
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: white;
  text-align: center;
  span {
    margin-right: 3px;
  }
  .mask {
    position: relative;
    overflow: hidden;
    display: inline-flex;
  }
`;

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.2, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default function Description({
  description = `We are thrilled to announce that the CSE Club of Patuakhali Science and Technology University is embarking on an unprecedented journey, hosting the Barishal divisional mega event, "PSTU IT Carnival 2023." This four-day extravaganza, taking place from September 22nd to 25th, 2023, promises to be an unforgettable experience.`,
}) {
  const descRef = useRef(null);
  const isInView = useInView(descRef);
  return (
    <Element ref={descRef} data-scroll data-scroll-speed={0.1}>
      <HeadingSecondary counter={1} style={{ marginBottom: "3rem" }}>
        Description
      </HeadingSecondary>
      <Para>
        {description.split(" ").map((word, index) => {
          return (
            <span key={index} className={"mask"}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </Para>
    </Element>
  );
}
