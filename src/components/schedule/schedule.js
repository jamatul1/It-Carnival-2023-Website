import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HeadingSecondary } from "../global/typography";
import React from "react";

import { styled } from "styled-components";
import { textRevealVariant } from "../animation/textReveal";
import { useInView } from "react-intersection-observer";
const styles = [
  {
    background: "transparent",
    color: "black",
    border: "1px solid gray",
    borderRadius: 0,
  },
];

const icons = ["hour", "play", "view"];
// const iconsMap = {
//   hour: <HourglassEmptyIcon />,
//   play: <PlayCircleFilledWhiteIcon />,
//   view: <ViewAgendaIcon />,
// };

const SponsorsWrapper = styled.div`
  padding: 15rem 0;
`;
export default function Schedule({ schedules = [] }) {
  const { ref: visiRef, inView } = useInView({});
  return (
    <>
      {schedules.length > 0 && (
        <SponsorsWrapper>
          <HeadingSecondary
            ref={visiRef}
            variants={textRevealVariant}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              duration: 0.8,
              ease: "linear",
            }}
            style={{ marginBottom: "5rem" }}
          >
            {" "}
            Events Schedules
          </HeadingSecondary>
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
                    background: "#131313",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3 className="vertical-timeline-element-title">{s.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {s.time}
                  </h4>
                  <p>{s.details} </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
          ;
        </SponsorsWrapper>
      )}
    </>
  );
}
