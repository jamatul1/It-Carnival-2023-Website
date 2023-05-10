import * as React from "react";

import Layout from "../components/layout";

import Showcase from "../components/landingPage/showcase";
import Description from "../components/landingPage/description";
import Events from "../components/landingPage/events/events";
import Schedule from "../components/schedule/schedule";
import Sponsors from "../components/landingPage/sponsors/sponsors";

const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <Description />
      <Events />
      <Sponsors />
      <Schedule
        schedules={[
          { title: "IUPC", time: "11 AM" },
          { title: "IUPC", time: "11 AM" },
          { title: "IUPC", time: "11 AM" },
          { title: "IUPC", time: "11 AM" },
        ]}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
