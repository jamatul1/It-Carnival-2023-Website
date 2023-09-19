import React from "react";
import * as styles from "./style.module.css";
import { motion } from "framer-motion";
import { textRevealVariant } from "../../animation/textReveal";
import { useInView } from "react-intersection-observer";
import ObjectReveal from "../../animation/objectReveal";
import cardImg from "../../../imgs/calm mind.png";
import { Link } from "gatsby";
const EventCard = React.forwardRef((props, ref) => {
  const { ref: contentRef, inView } = useInView({ threshold: 1 });
  console.log(props);
  return (
    <Link to={props.link}>
      <div ref={ref} className={styles.card}>
        <div ref={contentRef} className={styles.cardContent}>
          <div className={styles.cardImage}>
            <img src={props.src} alt="card_img" />
          </div>

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
                  {props.title}
                </motion.h3>
                {/* <motion.h4
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
              </motion.h4> */}
              </div>

              <Link to={props.link}>
                <button className={styles.cardInfoBtn}>View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default EventCard;
