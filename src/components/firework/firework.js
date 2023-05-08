import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { initAll } from "./fireworkCanvas";
const FireWorkCanvas = styled.canvas``;
export default function FireWorks() {
  let canvas = useRef();
  useEffect(() => {
    initAll(canvas.current);
  }, []);
  return <canvas ref={canvas} id="canvas-fireworks"></canvas>;
}
