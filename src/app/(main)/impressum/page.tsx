import React from "react";
import { Wrapper } from "@/components";
import styles from "./impressum.module.scss";

const Impressum = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1>Impressum</h1>
          <p>
            <strong>LIBERTY Finanz GmbH</strong>
          </p>
          <p>Schlachterstraße 6-8, 49808 Lingen (Ems)</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@libertyfinanz.de">info@libertyfinanz.de</a>
          </p>
        </div>

        <div className={styles.box}>
          <h3>Registereintrag:</h3>
          <p>Sitz der Gesellschaft: Lingen</p>
          <p>Eingetragen im Handelsregister</p>
          <p>Registergericht: Amtsgericht Osnabrück</p>
          <p>Registernummer: HRB 220337</p>
        </div>

        <div className={styles.box}>
          <h3>Vertreten durch:</h3>
          <p>Roman Skibner (Geschäftsführer)</p>
        </div>

        <div className={styles.box}>
          <h3>Immobiliardarlehensvermittler (§ 34i Abs. 1 S. 1 GewO):</h3>
          <p>Registrierungsnummer: D-W-162-UD96-88</p>
        </div>

        <div className={styles.box}>
          <h3>Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO:</h3>
          <p>Registrierungsnummer: D-FFGO-7UBW7-72</p>
        </div>

        <div className={styles.box}>
          <h3>Zuständige Aufsichtsbehörde:</h3>
          <p>
            Industrie- und Handelskammer Osnabrück-Emsland-Grafschaft Bentheim
          </p>
          <p>Neuer Graben 38</p>
          <p>49074 Osnabrück</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Impressum;
