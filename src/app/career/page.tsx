import React from "react";
import styles from "./career.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata = {
  title: "Karriere",
  description: "Liberty Finance Karriere",
  keywords: "",
};

const Career: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>
          Karriere bei Liberty Finance: Zukunft gestalten, <br />
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
        <ApplicationForm/>
      </div>
      <Footer isStatic={false} />
    </div>
  );
};

export default Career;
