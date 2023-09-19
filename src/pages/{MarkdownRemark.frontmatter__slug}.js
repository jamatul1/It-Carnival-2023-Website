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
import Description from "../components/landingPage/description";
import Sponsors from "../components/landingPage/sponsors/sponsors";
import HeadingSecondary from "../components/global/typography";
import { WrapperStyles } from "../components/landingPage/styles";
import parse from "html-react-parser";
const DescriptionWrapper = styled.section`
  padding: 10rem 2rem;
  text-align: center;
  background: rgb(63, 94, 251);
  color: white;
`;

const SummeryWrapper = styled.section`
  padding: 15rem 2rem;
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
    color: white;
  }
`;
const SItemRight = styled.span`
  font-size: 2rem;
  color: white;
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
  padding: 14rem 0 12rem 0;
  background: #3f5efb2b;
`;

const RulesList = styled.ol`
  padding: 1rem 5rem;
  margin-top: 50px;
  width: 60%;
  ${at(1200, `width: 70%;`)}
  ${at(900, `width: 80%; padding:2rem;`)}
  // ${at(600, `width: 100%; padding:2rem; text-align:center;`)}
margin:auto;
`;
const RuleListItem = styled.li`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;

  ${at(900, `font-size:2rem;`)}
  ${at(500, `font-size:1.8rem;`)}
`;

const DescriptionContainer = styled.article`
  width: 50%;
  margin: 0 auto;
  ${WrapperStyles}

  line-height:1.7;
  font-size: 2rem;
  ${at(900, `width:70%;font-size:1.8rem;`)}
  ${at(500, `width:80%;font-size:1.8rem;`)}
  h1 {
    margin-top: 20rem;
    font-size: 4.2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
  }
  p,
  ol,
  ul {
    margin-bottom: 3rem;
  }
  a {
    line-break: anywhere;
    color: white;
  }
`;

export default function EventTemplate({ data: { markdownRemark } }) {
  React.useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const { frontmatter, html } = markdownRemark;
  let coverImg = getImage(
    markdownRemark.frontmatter.coverImg?.childImageSharp?.gatsbyImageData
  );
  let prizeImg = getImage(
    markdownRemark.frontmatter.prizeImg?.childImageSharp?.gatsbyImageData
  );
  let { deadline, fee, formLink, prizePool, rules, schedules, title } =
    frontmatter;

  return (
    <Layout formLink={formLink}>
      <EventBanner
        title={title}
        deadline={deadline}
        fee={fee}
        formLink={formLink}
        prizePool={prizePool}
      />
      <DescriptionContainer>
        <HeadingSecondary counter={2}>Description</HeadingSecondary>
        {parse(html)}
      </DescriptionContainer>
      <Sponsors />
      <EventScheduleWrapper data-scroll data-scroll-speed="0.1">
        <Schedule schedules={schedules}></Schedule>
      </EventScheduleWrapper>
      {rules.length !== 0 && (
        <RulesWrapper data-scroll data-scroll-speed="0.2">
          <HeadingSecondary counter={5}>Rules</HeadingSecondary>
          <RulesList>
            {rules.map((r, i) => (
              <RuleListItem>{r}</RuleListItem>
            ))}
          </RulesList>
        </RulesWrapper>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        deadline
        fee
        prizePool
        formLink
        schedules {
          details
          time
          title
        }
        slug
        rules
      }
    }
  }
`;
