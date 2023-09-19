import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HeadingSecondary from "../global/typography";
import React from "react";

import { styled } from "styled-components";

import { useInView } from "react-intersection-observer";
import { at } from "../../utils/queryHelpers";
import { WrapperStyles } from "../landingPage/styles";
const styles = [
  {
    background: "transparent",
    color: "#535353",

    borderRadius: 10,
  },
];

const icons = ["hour", "play", "view"];
// const iconsMap = {
//   hour: <HourglassEmptyIcon />,
//   play: <PlayCircleFilledWhiteIcon />,
//   view: <ViewAgendaIcon />,
// };

const Element = styled.div`
  ${WrapperStyles}// background: ${(p) => p.theme.gd2};
  // background: #de6161; /* fallback for old browsers */
  // background: -webkit-linear-gradient(
  //   to right,
  //   #2657eb,
  //   #de6161
  // ); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(
  //   to right,
  //   #2657eb,
  //   #de6161
  // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const SponsorsWrapper = styled.div`
  width: 60%;
  margin: auto;
  ${at(600, `width: 80%;`)}
`;
export default function Schedule({ schedules = [], withHeading = true }) {
  const { ref: visiRef, inView } = useInView({});
  return (
    <>
      {schedules.length > 0 && (
        <Element>
          <SponsorsWrapper>
            {withHeading && (
              <HeadingSecondary
                style={{ marginBottom: "4rem" }}
                counter={4}
                color="white"
              >
                Schedules
              </HeadingSecondary>
            )}
            <VerticalTimeline>
              {schedules.map((s, i) => {
                let randomStyle =
                  styles[Math.floor(Math.random() * styles.length)];
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={randomStyle}
                    contentArrowStyle={{
                      borderRight: "7px solid  #fff",
                    }}
                    icon={<h1 style={{ margin: 0 }}>*</h1>}
                    iconStyle={{
                      background: "rgb(60 49 155)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      style={{ fontSize: 24, lineHeight: 1.2, color: "#fff" }}
                      className="vertical-timeline-element-title"
                    >
                      {s.details}
                    </h2>
                    <h3 className="vertical-timeline-element-subtitle">
                      {s.title} {" " + s.time}
                    </h3>
                    {/* <p>{s.details} </p> */}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </SponsorsWrapper>
        </Element>
      )}
    </>
  );
}
