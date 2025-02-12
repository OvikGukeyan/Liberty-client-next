import React, { FC } from "react";
import styles from "./career.module.scss";
import { ApplicationForm, Wrapper } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Karriere",
  description: "Liberty Finance Karriere",
  keywords: "",
};

const Career: FC = () => {
  return (
    <Wrapper>
      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            className={styles.logo}
            src={"/assets/logo.png"}
            alt="logo"
            width={120}
            height={120}
          />
        </div>

        <h1 className={styles.title}>
          Ihre Karriere bei der LIBERTY Finanz GmbH
        </h1>
        <div className={styles.container}>
          <div className={styles.text}>
            <h3 className={styles.subtitle}>
              Du suchst eine neue Herausforderung in einem dynamischen und
              zukunftsorientierten Unternehmen? <br /> Dann bist du bei uns genau
              richtig!
            </h3>
            <span className={styles.list_title}>Wir bieten dir:</span>
            <ul className={styles.list}>
              <li>Spannende Aufgaben & Entwicklungsmöglichkeiten</li>
              <li>Attraktive Vergütung & Zusatzleistungen</li>
              <li>Ein motiviertes Team & angenehmes Arbeitsklima</li>
              <li>Flexibles Arbeiten & Work-Life-Balance</li>
              <li>Weiterbildung & Aufstiegschancen</li>
            </ul>
            <p className={styles.description}>
              Egal, ob du Berufseinsteiger bist oder bereits Erfahrung
              mitbringst – wir freuen uns auf deine Bewerbung! Starte jetzt
              deine Karriere bei uns und gestalte mit uns die Zukunft.
              <br />
              Bewirb dich noch heute!
            </p>
          </div>
          <div className={styles.form}>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Career;
