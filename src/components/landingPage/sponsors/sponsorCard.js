import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import {
  textRevealStyles,
  textRevealVariant,
} from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";

const Card = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  border: 1px solid ${(p) => p.theme.bc};
`;
const Logo = styled.img`
  height: 8rem;
`;
const SponsorName = styled(motion.h6)`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(p) => p.theme.lgc};
  cursor: pointer;
  ${textRevealStyles}
`;

export default function SponsorCard() {
  const { ref: visiRef, inView } = useInView({
    threshold: 1,
  });
  return (
    <Card ref={visiRef}>
      <Logo
        src="https://i.pinimg.com/236x/6c/98/46/6c9846b7d091999f1b5f4db18436856f.jpg"
        alt="logo"
      />
      <SponsorName
        ref={visiRef}
        variants={textRevealVariant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
      >
        Vivasoft
      </SponsorName>
    </Card>
  );
}
