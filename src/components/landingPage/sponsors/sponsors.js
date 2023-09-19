import React from "react";
import { styled } from "styled-components";
import HeadingSecondary from "../../global/typography";
import SponsorCard from "./sponsorCard";
import { textRevealVariant } from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import ObjectReveal from "../../animation/objectReveal";
import { at } from "../../../utils/queryHelpers";
import { WrapperStyles } from "../styles";
import vivasoftImage from "../../../imgs/sponsors/vivasoft.jpg";
import bongodevImage from "../../../imgs/sponsors/bongodev.svg";
import hackerverseImage from "../../../imgs/sponsors/hackerverse.png";
const Element = styled.section`
  ${WrapperStyles}
`;
const SponsorsWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 2;
  flex-wrap: wrap;
  ${at(1200, `width:70%;`)}
  ${at(900, `width:80%;`)}
  ${at(600, `width:90%;`)}
  ${at(400, `width:96%;`)}
`;

export let sponsors = [
  {
    name: "Vivasoft",
    src: vivasoftImage,
    link: "https://www.vivasoftltd.com/",
  },
  {
    name: "Bongodev",
    src: bongodevImage,
    link: "https://bongodev.com/",
  },
  {
    name: "Hackerverse",
    src: hackerverseImage,
    link: "https://www.hackverse.dev/",
  },
];

export default function Sponsors() {
  const { ref: visiRef, inView } = useInView({ threshold: 1 });

  return (
    <Element>
      <HeadingSecondary counter={3}>Sponsors</HeadingSecondary>
      <SponsorsWrapper>
        {sponsors.map((s, i) => (
          <SponsorCard title={s.name} src={s.src} link={s.link} key={i} />
        ))}
      </SponsorsWrapper>
    </Element>
  );
}
