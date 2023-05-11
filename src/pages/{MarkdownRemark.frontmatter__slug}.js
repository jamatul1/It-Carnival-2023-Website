import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from "styled-components";

const CoverImgWrapper = styled.div``;
const CoverImg = styled.img``;
const EventSummery = styled.div``;
const SummeryWrapper = styled.div``;
const Summery = styled.div``;
const SummeryTitle = styled.h4``;
const SummeryItem = styled.div``;
const SummeryLabel = styled.h5``;
const SummeryValue = styled.p``;

const EventSummeryTitle = styled.h3``;

const Article = styled.article``;
const PrizeMoneyWrapper = styled.div``;
const PrizeMoneyBanner = styled.img``;

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
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <CoverImgWrapper>
        <GatsbyImage image={getImage(coverImg)} />
      </CoverImgWrapper>

      <EventSummery>
        <EventSummeryTitle>Event Summery</EventSummeryTitle>
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
      <Article>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
      <PrizeMoneyWrapper>
        <GatsbyImage image={getImage(prizeImg)} />
      </PrizeMoneyWrapper>
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
            gatsbyImageData(width: 800)
          }
        }
        prizeImg {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
