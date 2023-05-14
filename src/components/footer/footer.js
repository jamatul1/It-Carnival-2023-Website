import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { styled } from "styled-components";
import clubImg from "../../imgs/logo.jpg";
import developerImg from "../../imgs/me.png";
import { at, fCenter } from "../../utils/queryHelpers";

const Element = styled.footer`
  padding: 3rem;
  width: 80%;
  margin: auto;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;
const Bottom = styled.div``;
const ClubItem = styled.div`
  width: 300px;
  text-align: center;
  ${fCenter()}
  flex-direction:column;
  img {
    width: 10rem;
  }
  ${at(715, `margin:auto;`)}
`;
const HotlineItem = styled.div`
  > h2 {
    font-weight: 600;
  }
  > p > span {
    font-weight: bold;
    word-spacing: 5px;
  }
  > p {
    margin-bottom: 2rem;
  }
  ${at(715, `margin:auto;`)}
`;
const DeveloperItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    border-radius: 10rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  ${at(972, `margin:auto;`)}
`;
const Copyright = styled.p`
  text-align: center;
  font-size: 1.8rem;
`;
const HotlineSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  text-align: center;
`;
const Social = styled.a`
  color: #3f5efb;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    font-weight: 600;
  }
`;

export default function Footer() {
  return (
    <Element>
      <Top>
        <ClubItem>
          <img src={clubImg} alt="club img" />
          <p>Patuakhali Science and Technology University Cse Club</p>
        </ClubItem>
        <HotlineItem>
          <h2>Contact Us</h2>
          <p>
            <span>Hotline: </span> 019348989, 0173489992, 0192394838
          </p>
          <HotlineSocials>
            <Social>
              <FeatherIcon icon={"life-buoy"} />
              <span>Discord</span>
            </Social>
            <Social>
              <FeatherIcon icon={"facebook"} />
              <span>Facebook</span>
            </Social>
            <Social href="/me">
              <FeatherIcon icon={"mail"} />
              <span>Discord</span>
            </Social>
          </HotlineSocials>
        </HotlineItem>
        <DeveloperItem>
          <h4>This site is design & developed By </h4>
          <img src={developerImg} alt="developer-img" />
          <h6>Jamatul Talukder</h6>
        </DeveloperItem>
      </Top>
      <Bottom>
        <Copyright>
          © CSE CLUB Presents It Carnival 2023. All rights reserved.
        </Copyright>
      </Bottom>
    </Element>
  );
}
