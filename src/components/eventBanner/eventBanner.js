import React from "react";
import { styled } from "styled-components";
import { at, fCenter } from "../../utils/queryHelpers";
import awardIcon from "../../imgs/icons/award.png";
import scheduleIcon from "../../imgs/icons/schedule.png";
import feeIcon from "../../imgs/icons/fee.png";

import { Button, WhiteButton } from "../btn/btn";
import { motion } from "framer-motion";
import { sponsors } from "../landingPage/sponsors/sponsors";

const Element = styled.div`
  ${fCenter()}
  flex-direction:column;
  height: 100vh;
  //   width: 100vw;
  background: linear-gradient(to right, #3f5efb, #fc466b);
  background: #ff00cc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff00cc,
    #333399
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ff00cc, #333399);
  color: #fff;
  padding: 2rem;
  a {
    text-decoration: none;
  }
`;

const Title = styled(motion.h1)`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 0.8;
  text-align: center;
  letter-spacing: -0.045em;

  ${at(800, `font-size: 5.2rem; `)}
  ${at(600, `font-size: 4.4rem;`)}
${at(500, `font-size: 3.2rem; `)}
  margin-top: 10px;
  overflow: hidden;
  span {
    font: inherit;
    margin-right: 5px;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
    line-height: 1.1;
  }
  .mask {
    position: relative;
    overflow: hidden;
    display: inline-flex;
  }
`;

const TextsWrapper = styled.div`
  ${fCenter()}
  flex-direction:column;
  gap: 5rem;
  ${at(600, `margin-top:9rem; gap:3rem;`)}
`;
const TextTitleWrapper = styled.div`
  ${fCenter()}
  flex-direction:column;
  ${at(800, `gap:.5rem; `)}
`;
const TextDetailsWrapper = styled(motion.div)`
  ${fCenter()}
  flex-direction:column;
  gap: 1rem;
  ${at(600, `gap:2rem;`)}
`;

const TextTop = styled.div`
  ${fCenter()}
  flex-direction:column;
  gap: 2rem;
`;

const SponsorLabel = styled(motion.div)`
  ${fCenter()}
  margin-bottom: 1rem;
  gap: 2rem;
  span {
    color: white;
    letter-spacing: 1.2px;
  }
`;
const SponsorItem = styled.a`
  ${fCenter()}
  img {
    height: 3.2rem;
    width: 10.2rem;
    border-radius: 5px;
    object-fit: cover;
  }
  span {
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
  }
  gap: 1rem;
`;
const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${at(600, `flex-direction:column; width:80%;margin:auto;`)}
  img {
    height: 3.2rem;
    width: 3.2rem;
    object-fit: cover;
    ${at(600, `width:2.8rem; height:2.8rem;`)}
    ${at(500, `width:2.8rem; height:2.8rem; `)}
  }
  h4 {
    font-size: 2.4rem;
    line-height: 103.7%;
    /* or 33px */
    text-align: center;
    text-transform: capitalize;
    color: white;
    ${at(800, `font-size: 2.8rem; `)}
    ${at(600, `font-size: 2.4rem;`)}
  ${at(500, `font-size: 2rem; `)}
  }
`;

const titleVariant = {
  animate: {
    transition: {
      ease: "linear",
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};
const slideUp = {
  initial: {
    y: "200%",
  },
  animate: (i) => ({
    y: "0%",
  }),
};

const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

export default function EventBanner({
  title,
  deadline,
  fee,
  formLink,
  prizePool,
}) {
  return (
    <Element>
      <TextsWrapper>
        <TextTitleWrapper>
          <SponsorLabel
            variants={opacity}
            initial="initial"
            animate="animate"
            transition={{ easings: "linear" }}
          >
            {sponsors.map((s, i) => (
              <SponsorItem>
                <img src={s.src} alt="sponsor img" />
              </SponsorItem>
            ))}

            <span>Presents</span>
          </SponsorLabel>
          <Title variants={titleVariant} initial="initial" animate="animate">
            {" "}
            {title.split(" ").map((letters, i) => (
              <span key={i} className={"mask"}>
                <motion.span
                  variants={slideUp}
                  index={i}
                  transition={{ easings: "linear" }}
                  key={i}
                >
                  {letters}
                </motion.span>
              </span>
            ))}
          </Title>
        </TextTitleWrapper>
        <TextDetailsWrapper
          variants={opacity}
          initial="initial"
          animate="animate"
          transition={{ easings: "linear" }}
        >
          <Line>
            <img src={awardIcon} alt="prize"></img>
            <h4>Prize Pool : {prizePool}</h4>
          </Line>
          <Line>
            <img src={scheduleIcon} alt="deadline"></img>
            <h4>Payment Deadline : {deadline}</h4>
          </Line>
          <Line>
            <img src={feeIcon} alt="deadline"></img>
            <h4>Fees : {fee}</h4>
          </Line>
        </TextDetailsWrapper>
      </TextsWrapper>
      <a href={formLink}>
        {" "}
        <Button
          style={{
            marginTop: 80,
          }}
          variants={opacity}
          initial="initial"
          animate="animate"
          transition={{ easings: "linear" }}
        >
          Register Now !
        </Button>
      </a>
    </Element>
  );
}
