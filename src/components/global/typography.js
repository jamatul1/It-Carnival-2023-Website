import { styled } from "styled-components";
import { at, fCenter } from "../../utils/queryHelpers";
import { motion } from "framer-motion";
import React from "react";
export const Paragraph = styled(motion.h2)`
  font-size: 4.7rem;
  font-weight: 400;
  color: ${(p) => p.theme.tdc}
  line-height: 1.2;
  text-align: center;
  font-weight: 400;
  ${at(800, `font-size: 4rem; `)}
  ${at(600, `font-size: 3.8rem; `)}
${at(500, `font-size: 3.6rem;`)}
`;

const Counter = styled(motion.h2)`
  font-size: 10.2rem;
  color: ${(p) => (p.$black ? "#fff" : "#fff")};
  text-align: center;
  line-height: 1;
  font-weight: 700;
  width: 8rem;
  height: 8rem;
  // border: 0.5rem solid ${(p) => p.theme.tc};
  // border-radius: 50%;
  ${fCenter()}
  ${at(800, `font-size: 9.5rem; `)}
  ${at(600, `font-size: 9rem; `)}
${at(500, `font-size: 8.5rem;`)}
`;

export const ParagraphWhite = styled(Paragraph)`
  color: ${(p) => p.theme.wc};
`;

const Element = styled.div`
  ${fCenter()}
  flex-direction:column;
  // gap: 2rem;
`;

export default function HeadingSecondary({
  counter,
  color = "black",
  children,
  ...props
}) {
  return (
    <Element {...props}>
      {color === "black" ? (
        <Counter $black>{counter}</Counter>
      ) : (
        <Counter>{counter}</Counter>
      )}

      {color === "black" ? (
        <Paragraph>{children}</Paragraph>
      ) : (
        <ParagraphWhite>{children}</ParagraphWhite>
      )}
    </Element>
  );
}
