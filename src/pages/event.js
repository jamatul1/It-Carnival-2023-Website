import * as React from "react";

import Layout from "../components/layout";
import { styled } from "styled-components";
import coverImg from "../imgs/itcarnivalcover.webp";

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

const EventPage = () => {
  return (
    <Layout>
      <CoverImgWrapper>
        <CoverImg src={coverImg} alt="cover img"></CoverImg>
      </CoverImgWrapper>
      <EventSummery>
        <EventSummeryTitle>Event Summery</EventSummeryTitle>
        <SummeryWrapper>
          <Summery>
            <SummeryTitle>Summery Title</SummeryTitle>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
          </Summery>
          <Summery>
            <SummeryTitle>Summery Title</SummeryTitle>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
          </Summery>
          <Summery>
            <SummeryTitle>Summery Title</SummeryTitle>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
            <SummeryItem>
              <SummeryLabel>Label :</SummeryLabel>
              <SummeryValue>Value :</SummeryValue>
            </SummeryItem>
          </Summery>
        </SummeryWrapper>
      </EventSummery>
      <Article>
        <h1>Description</h1>
        <p>lorem ipsadkfjdk skldfj sfj</p>
      </Article>
      <PrizeMoneyWrapper>
        <PrizeMoneyBanner
          src={coverImg}
          alt="prize money banner"
        ></PrizeMoneyBanner>
      </PrizeMoneyWrapper>
    </Layout>
  );
};

export default EventPage;

export const Head = () => <title>Event Page</title>;
