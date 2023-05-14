import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { at, fCenter } from "../utils/queryHelpers";
import Schedule from "../components/schedule/schedule";
import EventBanner from "../components/eventBanner/eventBanner";
import boxImgUrl from "../imgs/icons/box.png";
import calendarImgUrl from "../imgs/icons/calendar.png";
import feeImgUrl from "../imgs/icons/fee.png";
import living_roomImgUrl from "../imgs/icons/living-room.png";
import osImgUrl from "../imgs/icons/os.png";
import period_timeImgUrl from "../imgs/icons/period-time.png";
import sigmaImgUrl from "../imgs/icons/sigma.png";
import translatorImgUrl from "../imgs/icons/translator.png";
const DescriptionWrapper = styled.section`
  padding: 10rem 2rem;
  text-align: center;
  background: rgb(63, 94, 251);
  color: white;
`;
const Description = styled.p`
  font-size: 2rem;
  line-height: 1.5;
`;

const SummeryWrapper = styled.section`
  padding: 10rem 2rem;
`;
const Summeries = styled.ul`
  list-style: none;
  ${fCenter()}
  flex-direction:column;
  gap: 1.5rem;
`;
const SItem = styled.li`
  ${fCenter()};
  font-size: 1.8rem;
  gap: 2rem;
`;
const SItemLeft = styled.div`
  ${fCenter()};
  gap: 1rem;
  img {
    height: 2rem;
    width: 2rem;
  }
  span {
    font-weight: 700;
    font-size: 2rem;
  }
`;
const SItemRight = styled.span`
  font-size: 2rem;
`;
const EventScheduleWrapper = styled.section``;

const Heading = styled.h2`
  text-align: center;
  font-size: 4.7rem;
  font-weight: 400;

  line-height: 1.2;
  text-align: center;
  font-weight: 700;
  margin-bottom: 3rem;
  ${at(800, `font-size: 4rem; `)}
  ${at(600, `font-size: 3.8rem;`)}
${at(500, `font-size: 3.6rem; `)}
`;

const RulesWrapper = styled.section`
  border-bottom: 1px solid #cbcbcb;
  padding: 10rem 0 8rem 0;
  background: #3f5efb2b;
`;

const RulesList = styled.ol`
  padding: 1rem 5rem;
  width: 60%;
  ${at(1200, `width: 70%;`)}
  ${at(900, `width: 80%; padding:1rem;`)}
  // ${at(600, `width: 100%; padding:2rem; text-align:center;`)}
margin:auto;
`;
const RuleListItem = styled.li`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
`;

export default function EventTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  let coverImg = getImage(
    markdownRemark.frontmatter.coverImg?.childImageSharp?.gatsbyImageData
  );
  let prizeImg = getImage(
    markdownRemark.frontmatter.prizeImg?.childImageSharp?.gatsbyImageData
  );
  let summery = markdownRemark.frontmatter.summery;
  return (
    <Layout>
      <EventBanner />
      <DescriptionWrapper>
        <Heading>Description</Heading>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </Description>
      </DescriptionWrapper>
      <SummeryWrapper>
        <Heading>Summery</Heading>
        <Summeries>
          <SItem>
            <SItemLeft>
              <img src={period_timeImgUrl} alt="img" />
              <span>Duration :</span>
            </SItemLeft>
            <SItemRight>5 Hours</SItemRight>
          </SItem>
          <SItem>
            <SItemLeft>
              <img src={boxImgUrl} alt="img" />
              <span>Team Size :</span>
            </SItemLeft>
            <SItemRight>3 Members</SItemRight>
          </SItem>
          <SItem>
            <SItemLeft>
              <img src={feeImgUrl} alt="img" />
              <span>Registration Fees :</span>
            </SItemLeft>
            <SItemRight>450 tk</SItemRight>
          </SItem>
          <SItem>
            <SItemLeft>
              <img src={osImgUrl} alt="img" />
              <span>Os :</span>
            </SItemLeft>
            <SItemRight>Windows</SItemRight>
          </SItem>
          <SItem>
            <SItemLeft>
              <img src={translatorImgUrl} alt="img" />
              <span>Languages :</span>
            </SItemLeft>
            <SItemRight>Javascript</SItemRight>
          </SItem>
        </Summeries>
      </SummeryWrapper>
      <EventScheduleWrapper>
        <Schedule
          schedules={[
            {
              title: "27 January 2023, 10:30 AM",
              time: "UPC Team Reporting, Registration, Kit Collection",
            },
            {
              title: "27 January 2023, 10:30 AM",
              time: "UPC Team Reporting, Registration, Kit Collection",
            },
            {
              title: "27 January 2023, 10:30 AM",
              time: "UPC Team Reporting, Registration, Kit Collection",
            },
            {
              title: "27 January 2023, 10:30 AM",
              time: "UPC Team Reporting, Registration, Kit Collection",
            },
          ]}
        ></Schedule>
      </EventScheduleWrapper>
      <RulesWrapper>
        <Heading>Rules</Heading>
        <RulesList>
          <RuleListItem>
            {" "}
            Solutions to problems submitted for judging are called runs. Each
            run is judged as accepted or rejected by the judge, and the team is
            notified of the result. Only source code should be submitted, not
            the executables or any other files.
          </RuleListItem>
          <RuleListItem> You need to put your arm on shoulder</RuleListItem>
          <RuleListItem>
            {" "}
            Solutions to problems submitted for judging are called runs. Each
            run is judged as accepted or rejected by the judge, and the team is
            notified of the result. Only source code should be submitted, not
            the executables or any other files.
          </RuleListItem>
        </RulesList>
      </RulesWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        summery {
          title
          items {
            key
            value
          }
        }
        coverImg {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;
