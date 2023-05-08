import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HeadingSecondary } from "../global/typography";
import React from "react";
const styles = [
  {
    background: "rgb(43 43 43)",
    color: "black",
    borderRadius: 0,
  },
];

const icons = ["hour", "play", "view"];
// const iconsMap = {
//   hour: <HourglassEmptyIcon />,
//   play: <PlayCircleFilledWhiteIcon />,
//   view: <ViewAgendaIcon />,
// };
export default function Schedule({ schedules = [] }) {
  return (
    <>
      {schedules.length > 0 && (
        <div className="schedule">
          <HeadingSecondary>Schedules</HeadingSecondary>
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
                  iconStyle={randomStyle}
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
        </div>
      )}
    </>
  );
}
