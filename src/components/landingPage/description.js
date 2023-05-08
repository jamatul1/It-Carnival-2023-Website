import React from "react";
import { styled } from "styled-components";

const Element = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100vh;
  padding: 15rem 0;
`;
const Para = styled.p`
  font-size: 3.6rem;
  line-height: 1.3;
  font-weight: 300;
  letter-spacing: 1.2px;
`;
export default function Description() {
  return (
    <Element>
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
