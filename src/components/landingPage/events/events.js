import React, { useEffect, useRef } from "react";
import * as styles from "./style.module.css";
import HeadingSecondary from "../../global/typography";
import { useInView } from "react-intersection-observer";
import EventCard from "./eventCard";
import ObjectReveal from "../../animation/objectReveal";

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
  let card5Ref = useRef();
  let card6Ref = useRef();

  const { ref: visiRef, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    configCards(cardsRef.current, [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
      card5Ref.current,
      card6Ref.current,
    ]);
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
        <EventCard ref={card1Ref} />

        <EventCard ref={card2Ref} />

        <EventCard ref={card3Ref} />

        <EventCard ref={card4Ref} />

        <EventCard ref={card5Ref} />

        <EventCard ref={card6Ref} />
      </div>
    </div>
  );
}
