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
const styles = [
  {
    background: "#fff",
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
  padding: 5rem 0;
  padding-bottom: 10rem;
  background: ${(p) => p.theme.gd2};
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
                    icon={
                      <img
                        src="https://img.fortawesome.com/1ce05b4b/start-illustration.svg"
                        height={24}
                        width={24}
                      />
                    }
                    iconStyle={{
                      background: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      style={{ fontSize: 24, lineHeight: 1.2 }}
                      className="vertical-timeline-element-title"
                    >
                      {s.title}
                    </h2>
                    <h3 className="vertical-timeline-element-subtitle">
                      {s.time}
                    </h3>
                    <p>{s.details} </p>
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
