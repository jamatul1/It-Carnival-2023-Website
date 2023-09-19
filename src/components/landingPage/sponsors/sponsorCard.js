import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import {
  textRevealStyles,
  textRevealVariant,
} from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import sponsorLogo from "../../../imgs/icons/sponsorlogo.png";
import { Link } from "gatsby";
const Card = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  a {
    text-decoration: none;
  }
  text-align: center;
`;
const Logo = styled.img`
  border-radius: 0.5rem;
  width: 15rem;
`;
const SponsorName = styled(motion.h6)`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
`;

export default function SponsorCard({ title, link, src }) {
  const { ref: visiRef, inView } = useInView({
    threshold: 1,
  });
  return (
    <Card ref={visiRef}>
      <a href={link} target="_blank">
        <Logo src={src} alt="logo" />
        <SponsorName>{title}</SponsorName>
      </a>
    </Card>
  );
}
