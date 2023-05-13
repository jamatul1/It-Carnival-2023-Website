import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { at } from "../utils/queryHelpers";
import Schedule from "../components/schedule/schedule";
import {
  HeadingSecondary,
  HeadingSecondaryE,
} from "../components/global/typography";

const CoverImgWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
`;
const CoverImg = styled.img``;
const ContentWrapper = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 7rem;
  margin-bottom: 10rem;
  ${at(1200, `width: 75%; margin-top: 5rem; margin-bottom: 6rem;`)}
  ${at(900, `width: 85%;`)}
${at(600, `width: 90%;margin-top: 3rem; margin-bottom: 3rem;`)}
${at(400, `width: 94%;`)}
`;
const EventSummery = styled.div`
  width: 76%;
  margin: auto;
  text-align: center;
  margin-bottom: 7rem;
  padding: 3rem 0;
  ${at(1200, `width: 80%;`)}
  ${at(900, `width: 85%;`)}
${at(600, `width: 94%;`)}
${at(400, `padding:2rem;`)}
`;
const SummeryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20rem;
  flex-wrap: wrap;
`;
const Summery = styled.div``;
const SummeryTitle = styled.h4`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.2;
  padding-bottom: 0.5rem;
  ${at(400, `font-size: 2rem;`)}
`;
const SummeryItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const SummeryLabel = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
`;
const SummeryValue = styled.p``;
const EventSummeryTitle = styled.h3`
  font-size: 3.6rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  ${at(600, `font-size: 3rem; margin-bottom: 1.2rem;`)}
  ${at(400, `font-size: 2.8rem;`)}
`;

const Article = styled.article`
  text-align: center;
  h1 {
    font-size: 4.7rem;
    font-weight: 400;

    line-height: 1.2;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
    ${at(800, `font-size: 4rem; `)}
    ${at(600, `font-size: 3.8rem;`)}
  ${at(500, `font-size: 3.6rem; `)}
  margin-bottom: 3rem;
  }
  p {
    font-size: 1.8rem;
  }
`;
const PrizeMoneyWrapper = styled.div``;
const PrizeMoneyBanner = styled.img``;
const EventScheduleWrapper = styled.section``;

const Heading = styled.h2`
  text-align: center;
  font-size: 4.7rem;
  font-weight: 400;

  line-height: 1.2;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
  ${at(800, `font-size: 4rem; `)}
  ${at(600, `font-size: 3.8rem;`)}
${at(500, `font-size: 3.6rem; `)}
`;

const RulesWrapper = styled.section`
  margin: auto;
  margin-top: 5rem;
  border-bottom: 1px solid #cbcbcb;
  padding: 5rem 0 8rem 0;
`;

const RulesList = styled.ol`
  padding: 1rem 5rem;
  width: 60%;
  ${at(1200, `width: 70%;`)}
  ${at(900, `width: 80%;`)}
${at(600, `width: 94%;`)}
margin:auto;
`;
const RuleListItem = styled.li`
  font-size: 2rem;
  margin-bottom: 1rem;
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
      <CoverImgWrapper>
        <GatsbyImage image={getImage(coverImg)} />
      </CoverImgWrapper>
      <ContentWrapper>
        <Article>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Article>
      </ContentWrapper>
      <EventSummery>
        <Heading
          style={{
            marginBottom: "3rem",
          }}
        >
          Summery
        </Heading>
        <SummeryWrapper>
          {summery.map((s, i) => {
            return (
              <Summery key={i}>
                <SummeryTitle>{s.title}</SummeryTitle>
                {s.items.map((item, i) => {
                  return (
                    <SummeryItem key={i}>
                      <SummeryLabel>{item.key}</SummeryLabel>
                      <SummeryValue>{item.value}</SummeryValue>
                    </SummeryItem>
                  );
                })}
              </Summery>
            );
          })}
        </SummeryWrapper>
      </EventSummery>
      <EventScheduleWrapper>
        <Schedule
          schedules={[
            { title: "IUPC", time: "11 AM" },
            { title: "IUPC", time: "11 AM" },
            { title: "IUPC", time: "11 AM" },
            { title: "IUPC", time: "11 AM" },
          ]}
        ></Schedule>
      </EventScheduleWrapper>
      <RulesWrapper>
        <Heading>Rules</Heading>
        <RulesList>
          <RuleListItem> You need to put your arm on shoulder</RuleListItem>
          <RuleListItem> You need to put your arm on shoulder</RuleListItem>
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
