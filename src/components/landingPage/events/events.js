import React, { useEffect, useRef } from "react";
import * as styles from "./style.module.css";
import HeadingSecondary from "../../global/typography";
import { useInView } from "react-intersection-observer";
import EventCard from "./eventCard";
import ObjectReveal from "../../animation/objectReveal";
import iupcImg from "../../../imgs/events/programming.png";
import hackathonImg from "../../../imgs/events/hackathon.jpg";
import pstuImg from "../../../imgs/events/pstu_challenges.png";

const revealVariant = {
  initial: {
    backgroundPosition: "100%",
  },
  animate: {
    backgroundPosition: "0%",
  },
};
function configCards(container, items) {
  container.onmousemove = (e) => {
    console.log(items);
    for (const card of items) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}

export default function Events() {
  let cardsRef = useRef();
  let card1Ref = useRef();
  let card2Ref = useRef();
  let card3Ref = useRef();
  let card4Ref = useRef();

  const { ref: visiRef, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    // configCards(cardsRef.current, [
    //   card1Ref.current,
    //   card2Ref.current,
    //   card3Ref.current,
    //   card4Ref.current,
    // ]);
  }, []);
  return (
    <div className={styles.events}>
      <HeadingSecondary
        counter={2}
        style={{ marginBottom: "5rem" }}
        color="white"
      >
        All The Events Under It Carnival 2023
      </HeadingSecondary>
      <div ref={cardsRef} className={styles.cards}>
        <EventCard
          title="Inter University Programming Contest"
          src={iupcImg}
          link={"/events/iupc"}
          ref={card1Ref}
        />

        <EventCard
          title="Hackathon"
          src={hackathonImg}
          link={"/events/hackathon"}
          ref={card2Ref}
        />

        <EventCard
          title="PSTU Intra - 1"
          src={pstuImg}
          link={"/events/pstu-1"}
          ref={card3Ref}
        />

        <EventCard
          title="PSTU Intra - 2"
          src={pstuImg}
          link={"/events/pstu-2"}
          ref={card4Ref}
        />
      </div>
    </div>
  );
}
