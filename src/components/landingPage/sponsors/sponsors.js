import React from "react";
import { styled } from "styled-components";
import { HeadingSecondary } from "../../global/typography";
import SponsorCard from "./sponsorCard";
import { textRevealVariant } from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";

const Element = styled.section`
  padding: 10rem 0;
`;
const SponsorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export default function Sponsors() {
  const { ref: visiRef, inView } = useInView({ threshold: 1 });
  return (
    <Element>
      <HeadingSecondary
        ref={visiRef}
        variants={textRevealVariant}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={{
          duration: 0.8,
          ease: "linear",
        }}
        style={{ marginBottom: "5rem" }}
      >
        It carnivals Sponsors
      </HeadingSecondary>
      <SponsorsWrapper>
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </SponsorsWrapper>
    </Element>
  );
}
