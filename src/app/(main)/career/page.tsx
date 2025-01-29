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
          <Image className={styles.logo} src={"/assets/logo.png"} alt="logo" width={150} height={150} />
        </div>

        <h1 className={styles.title}>
          Ihre Karriere bei der Liberty Finance GmbH:
          <br /> Zukunft gestalten, Erfolg sichern
        </h1>
        <div className={styles.container}>
          <div className={styles.text}>
            <p>
              Willkommen bei Liberty Finance, wo wir daran glauben, Menschen
              dabei zu unterstützen, starke und sichere Zukünfte aufzubauen.
              Unsere Mission ist es, innovative und umfassende
              Versicherungslösungen für Privatpersonen und Unternehmen
              bereitzustellen, während wir eine Kultur der Zusammenarbeit, des
              Wachstums und des Respekts fördern. Wenn Sie unserem Team
              beitreten, haben Sie die Möglichkeit, das Leben unserer Kunden
              positiv zu beeinflussen und zur Zukunft der Versicherungsbranche
              beizutragen.
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
