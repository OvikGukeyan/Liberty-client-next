import React, { FC } from "react";
import styles from "./career.module.scss";
import { ApplicationForm, Footer, Header } from "@/components";

export const metadata = {
  title: "Karriere",
  description: "Liberty Finance Karriere",
  keywords: "",
};

const Career: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>
          Ihre Karriere bei der Liberty Finance GmbH:<br /> Zukunft gestalten,
          Erfolg sichern
        </h1>
        <div className={styles.what}>
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
          <div className={styles.img}></div>
        </div>
        <ApplicationForm />
      </div>
      <Footer isStatic={false} />
    </div>
  );
};

export default Career;
