import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { styled } from "styled-components";
import clubImg from "../../imgs/icons/logo_w.png";
import developerImg from "../../imgs/me.png";
import developer1Img from "../../imgs/tahsin.jpg";
import { at, fCenter } from "../../utils/queryHelpers";

const Element = styled.footer`
  background: #2b2b2b;
`;

const Wrapper = styled.div`
  padding: 10rem 3rem;
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
  background: white;
  color: black;
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  img {
    width: 10rem;
    margin-bottom: 10px;
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
  gap: 0.5rem;
  img {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    border-radius: 10rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  h4 {
    color: #fff;
  }
  h6 {
    font-size: 1.4rem;
  }
  ${at(972, `margin:auto;`)}
`;
const Copyright = styled.p`
  text-align: center;
  font-size: 1.4rem;
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
    font-weight: 400;
    color: #fff;
  }
`;

export default function Footer() {
  return (
    <Element>
      <Wrapper>
        <Top>
          <ClubItem>
            <img src={clubImg} alt="club img" />
            <p>CSE CLUB, PSTU</p>
          </ClubItem>
          <HotlineItem>
            <h2 style={{ fontWeight: 400 }}>Contact Us</h2>
            <p>
              <span style={{ color: "#fff" }}>Hotline: </span> 01301479582,
              01738-883211, 01742059121
            </p>
            <p>
              <span style={{ color: "#fff" }}>Email: </span>{" "}
              cseclub@cse.pstu.ac.bd
            </p>
            <HotlineSocials>
              <Social>
                <FeatherIcon icon={"life-buoy"} />
                <span>Discord</span>
              </Social>
              <Social
                href="https://www.facebook.com/CSEClubPSTU"
                target="_blank"
              >
                <FeatherIcon icon={"facebook"} />
                <span>Facebook</span>
              </Social>
              <Social href="/me">
                <FeatherIcon icon={"mail"} />
                <span>Email</span>
              </Social>
            </HotlineSocials>
          </HotlineItem>
          <DeveloperItem>
            <h4>This site is design & developed By </h4>
            <img src={developerImg} alt="developer-img" />
            <h6 style={{ fontWeight: 400, margin: 0 }}>Jamatul Talukder</h6>
            <p style={{ fontSize: 12, margin: 0 }}>
              Instructor & Member @ CSE CLUB, PSTU
            </p>
          </DeveloperItem>
          <DeveloperItem>
            <h4>Data collection, Deploy and Tested By </h4>
            <img src={developer1Img} alt="developer-img" />
            <h6 style={{ fontWeight: 400, margin: 0 }}>Md Tahsin Amin</h6>
            <p style={{ fontSize: 12, margin: 0 }}>Member @ CSE CLUB, PSTU</p>
          </DeveloperItem>
        </Top>
        <Bottom>
          <Copyright>
            © CSE CLUB Presents It Carnival 2023. All rights reserved.
          </Copyright>
        </Bottom>
      </Wrapper>
    </Element>
  );
}
