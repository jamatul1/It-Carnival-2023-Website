import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import {
  textRevealStyles,
  textRevealVariant,
} from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import sponsorLogo from "../../../imgs/icons/sponsorlogo.png";
const Card = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
`;
const Logo = styled.img`
  height: 8rem;
  border-radius: 0.5rem;
`;
const SponsorName = styled(motion.h6)`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(p) => p.theme.lgc};
`;

export default function SponsorCard() {
  const { ref: visiRef, inView } = useInView({
    threshold: 1,
  });
  return (
    <Card ref={visiRef}>
      <Logo src={sponsorLogo} alt="logo" />
      <SponsorName>Sponsor</SponsorName>
    </Card>
  );
}
