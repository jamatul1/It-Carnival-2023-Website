import React from "react";
import * as styles from "./style.module.css";
import { motion } from "framer-motion";

export default function ScrollDownLogo() {
  return (
    <motion.div className={styles.field}>
      <motion.div className={styles.mouse}></motion.div>
    </motion.div>
  );
}
