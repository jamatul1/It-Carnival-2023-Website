import React, { useEffect, useRef } from "react";
import * as styles from "./style.module.css";
import { HeadingSecondary } from "../../global/typography";
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
      <HeadingSecondary>All The Events Under It Carnival 2023</HeadingSecondary>
      <div ref={cardsRef} className={styles.cards}>
        <div ref={card1Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={card3Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={card4Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={card5Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={card6Ref} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardImage}>
              <img
                src="https://thumbs.dreamstime.com/z/event-management-vector-illustration-tiny-planning-process-person-concept-flat-persons-festive-seminar-party-other-social-164875364.jpg"
                alt="card_img"
              />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoTitle}>
                  <h3>Hackathon</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
                <button className={styles.cardInfoBtn}>
                  Read More <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
