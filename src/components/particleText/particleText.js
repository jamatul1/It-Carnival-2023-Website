import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { startCanvas } from "./particleCanvas";

const ParticleCanvas = styled.canvas`
  z-index: 1000;
`;
export default function ParticleText({ text }) {
  let canvasRef = useRef();
  useEffect(() => {
    startCanvas(canvasRef.current);
  }, []);
  return <ParticleCanvas ref={canvasRef}></ParticleCanvas>;
}
