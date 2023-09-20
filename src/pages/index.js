import * as React from "react";

import Layout from "../components/layout";

import Showcase from "../components/landingPage/showcase";
import Description from "../components/landingPage/description";
import Events from "../components/landingPage/events/events";
import Schedule from "../components/schedule/schedule";
import Sponsors from "../components/landingPage/sponsors/sponsors";
import { SEO } from "../components/seo";

const schedules = [
  {
    title: "22 September 2023",
    time: "9:30AM - 1:00PM",
    details: "Chess Event will be start",
  },
  {
    title: "22 September 2023",
    time: "1:00PM - 2:30PM",
    details: "Jumma Break for 1:5 hour",
  },
  {
    title: "22 September 2023",
    time: "2:30PM - 5:00PM",
    details: "Chess Event will resume",
  },
  {
    title: "22 September 2023",
    time: "5:00PM - 6:30PM",
    details: "Poster Design Submission",
  },
  {
    title: "23 September 2023",
    time: "10:00AM - 11:00AM",
    details: "It Quiz Event will start",
  },
  {
    title: "23 September 2023",
    time: "11:00AM - 12:30PM",
    details: "Rubik's Cube will be start",
  },
  {
    title: "23 September 2023",
    time: "12:30PM - 2:00PM",
    details: "Break for 1:5 hour",
  },
  {
    title: "23 September 2023",
    time: "2:00PM - 5:30PM",
    details: "Ludo will be start - Girls 7th",
  },
  {
    title: "23 September 2023",
    time: "5:30PM - 8:00PM",
    details: "Fifa Day 1",
  },
  {
    title: "24 September 2023",
    time: "9:30AM - 1:00PM",
    details: "PUBG",
  },
  {
    title: "24 September 2023",
    time: "1:00PM - 2:00PM",
    details: "Break for 1 hour",
  },
  {
    title: "24 September 2023",
    time: "2:00PM - 3:30PM",
    details: "Project Showcasing ",
  },
  {
    title: "24 September 2023",
    time: "3:30PM - 6:00PM",
    details: "Ludo day  2",
  },
  {
    title: "24 September 2023",
    time: "6:00PM - 8:00PM",
    details: "Fifa day  2",
  },

  {
    title: "25 September 2023",
    time: "9:30AM - 1:00PM",
    details: "Programming Contest",
  },
  {
    title: "25 September 2023",
    time: "1:00PM - 2:00PM",
    details: "Break for 1 hour",
  },
  {
    title: "25 September 2023",
    time: "2:00PM - 3:30PM",
    details: "Hackathon ",
  },
  {
    title: "25 September 2023",
    time: "4:00PM - 6:00PM",
    details: "Prize Giving Ceremony",
  },
];
const IndexPage = () => {
  React.useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <Layout>
      <Showcase />
      <Description />
      <Events />
      <Sponsors />
      <Schedule schedules={schedules} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
