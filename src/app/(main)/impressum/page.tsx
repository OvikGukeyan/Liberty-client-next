import React from "react";
import { Wrapper } from "@/components";
import styles from "./impressum.module.scss";

const Impressum = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1>Impressum</h1>
          <p>Liberty Finance GmbH</p>
          <p>Schlachterstraße 6-8, 49808 Lingen (Ems)</p>
          <p>Email: info@libertyfinanz.de</p>
        </div>

        <div className={styles.box}>
          <h3>Registereintrag:</h3>
        </div>

        <div className={styles.box}>
          <h3>Vertreten durch::</h3>
        </div>
        <div className={styles.box}>
          <h3>Zuständige Aufsichtsbehörde:</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Impressum;
