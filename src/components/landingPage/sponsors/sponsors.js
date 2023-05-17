import React from "react";
import { styled } from "styled-components";
import HeadingSecondary from "../../global/typography";
import SponsorCard from "./sponsorCard";
import { textRevealVariant } from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import ObjectReveal from "../../animation/objectReveal";
import { at } from "../../../utils/queryHelpers";

const Element = styled.section`
  padding: 10rem 0;
`;
const SponsorsWrapper = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  ${at(1200, `width:70%;`)}
  ${at(900, `width:80%;`)}
  ${at(600, `width:90%;`)}
  ${at(400, `width:96%;`)}
`;

export default function Sponsors() {
  const { ref: visiRef, inView } = useInView({ threshold: 1 });
  return (
    <Element>
      <HeadingSecondary counter={3}>It Carnival Sponsors</HeadingSecondary>
      <SponsorsWrapper>
        <ObjectReveal>
          <SponsorCard />
        </ObjectReveal>
        <ObjectReveal>
          <SponsorCard />
        </ObjectReveal>
        <ObjectReveal>
          <SponsorCard />
        </ObjectReveal>
        <ObjectReveal>
          <SponsorCard />
        </ObjectReveal>
        <ObjectReveal>
          <SponsorCard />
        </ObjectReveal>
      </SponsorsWrapper>
    </Element>
  );
}
