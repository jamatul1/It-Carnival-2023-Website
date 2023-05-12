import React from "react";
import * as styles from "./style.module.css";
import { motion } from "framer-motion";
import { textRevealVariant } from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import ObjectReveal from "../../animation/objectReveal";
import cardImg from "../../../imgs/marketing.png";

const EventCard = React.forwardRef((props, ref) => {
  const { ref: contentRef, inView } = useInView({ threshold: 1 });
  return (
    <div ref={ref} className={styles.card}>
      <div ref={contentRef} className={styles.cardContent}>
        <ObjectReveal>
          <div className={styles.cardImage}>
            <img src={cardImg} alt="card_img" />
          </div>
        </ObjectReveal>

        <div className={styles.cardInfoWrapper}>
          <div className={styles.cardInfo}>
            <div className={styles.cardInfoTitle}>
              <motion.h3
                initial="initial"
                animate={inView ? "animate" : "initial"}
                variants={textRevealVariant}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                  ease: "linear",
                }}
              >
                Hackathon
              </motion.h3>
              <motion.h4
                initial="initial"
                animate={inView ? "animate" : "initial"}
                variants={textRevealVariant}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "linear",
                }}
              >
                Places to be apart. Wait, what?
              </motion.h4>
            </div>

            <ObjectReveal width="content-width">
              <button className={styles.cardInfoBtn}>Read More</button>
            </ObjectReveal>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EventCard;
