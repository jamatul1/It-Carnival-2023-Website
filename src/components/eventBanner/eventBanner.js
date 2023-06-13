import React from "react";
import { styled } from "styled-components";
import { at, fCenter } from "../../utils/queryHelpers";
import awardIcon from "../../imgs/icons/award.png";
import scheduleIcon from "../../imgs/icons/schedule.png";
import vivasoftIcon from "../../imgs/icons/herologo.png";
import { WhiteButton } from "../btn/btn";

const Element = styled.div`
  ${fCenter()}
  flex-direction:column;
  height: 100vh;
  //   width: 100vw;
  background: linear-gradient(to right, #3f5efb, #fc466b);
  color: #fff;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 6.4rem;
  line-height: 0.8;
  text-align: center;
  letter-spacing: -0.045em;
  text-transform: capitalize;
  ${at(800, `font-size: 5.6rem; `)}
  ${at(600, `font-size: 4.8rem;`)}
${at(500, `font-size: 4.4rem; `)}
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
const TextDetailsWrapper = styled.div`
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

const SponsorLabel = styled.div`
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
    width: 3.2rem;
    border-radius: 50%;
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
    font-size: 3.2rem;
    line-height: 103.7%;
    /* or 33px */
    text-align: center;
    text-transform: capitalize;
    color: white;
    ${at(800, `font-size: 3rem; `)}
    ${at(600, `font-size: 2.8rem;`)}
  ${at(500, `font-size: 2.4rem; `)}
  }
`;
export default function EventBanner() {
  return (
    <Element>
      <TextsWrapper>
        <TextTitleWrapper>
          <SponsorLabel>
            <SponsorItem>
              <img src={vivasoftIcon} alt="sponsor img" />
              <span>Sponsor-1</span>
            </SponsorItem>
            <SponsorItem>
              <img src={vivasoftIcon} alt="sponsor img" />
              <span>Sponsor-2</span>
            </SponsorItem>
            <span>Presents</span>
          </SponsorLabel>
          <Title>Inter Universty Programming Contest</Title>
        </TextTitleWrapper>
        <TextDetailsWrapper>
          <Line>
            <img src={awardIcon} alt="prize"></img>
            <h4>Prize Money BDT 200k</h4>
          </Line>
          <Line>
            <img src={scheduleIcon} alt="deadline"></img>
            <h4>Payment Deadline : 12 January 2023</h4>
          </Line>
        </TextDetailsWrapper>
      </TextsWrapper>
      <WhiteButton
        style={{
          marginTop: 80,
        }}
      >
        Join Our Discord Server!
      </WhiteButton>
    </Element>
  );
}
