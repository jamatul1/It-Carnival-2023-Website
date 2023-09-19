import { styled } from "styled-components";
import { at, fCenter } from "../../utils/queryHelpers";
import { motion } from "framer-motion";
import React from "react";
export const Paragraph = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 700;
  color: ${(p) => p.theme.tdc}
  line-height: 1.2;
  text-align: center;
  ${at(800, `font-size: 4rem; `)}
  ${at(600, `font-size: 3.8rem; `)}
${at(500, `font-size: 3.6rem;`)}
`;

const Counter = styled(motion.h2)`
  font-size: 5.6rem;
  color: ${(p) => (p.$black ? "#fff" : "#fff")};
  text-align: center;
  line-height: 1;
  font-weight: 700;
  width: 6rem;
  height: 6rem;
  border: 1rem solid #f4f4f430;
  border-radius: 50%;
  ${fCenter()}
`;

export const ParagraphWhite = styled(Paragraph)`
  color: ${(p) => p.theme.wc};
`;

const Element = styled.div`
  ${fCenter()}
  flex-direction:column;
  // gap: 2rem;
  padding: 1rem;
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

      <ParagraphWhite>{children}</ParagraphWhite>
    </Element>
  );
}
