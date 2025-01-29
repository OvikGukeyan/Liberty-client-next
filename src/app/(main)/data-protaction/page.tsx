import React from "react";
import { Wrapper } from "@/components";
import styles from "./data-protaction.module.scss";

const DataProtaction = () => {
  return (
    <Wrapper>
      <div className={styles.main}>
        <div className={styles.box}>
          <h2 className={styles.title}>1. Datenschutz auf einen Blick</h2>
          <h3 className={styles.subtitle}>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben Ihnen einen Überblick darüber, was mit
            Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            entnehmen Sie unserer Datenschutzerklärung.
          </p>

          <h3 className={styles.subtitle}>
            Datenerfassung auf unserer Website
          </h3>
          <h4 className={styles.sectionTitle}>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Betreiber:
          </p>
          <div className={styles.address}>
            <strong >LIBERTY Finanz GmbH</strong>
            <br />
            Schlachterstraße 6-8, 49808 Lingen (Ems)
            <br />
            Telefon: +49 (0) 591-12345678
            <br />
            E-Mail:{" "}
            <a href="mailto:info@libertyfinanz.de">info@libertyfinanz.de</a>
          </div>
          <h4 className={styles.sectionTitle}>Wie erfassen wir Ihre Daten?</h4>
          <p>
            Ein Teil der Daten wird automatisch durch unsere IT-Systeme erfasst,
            sobald Sie unsere Website betreten (z. B. Browsertyp,
            Betriebssystem, Uhrzeit des Zugriffs). Andere Daten geben Sie uns
            aktiv ein, z. B. durch Ausfüllen eines Kontaktformulars.
          </p>

          <h4 className={styles.sectionTitle}>Wofür nutzen wir Ihre Daten?</h4>
          <p>
            Ein Teil der Daten wird verwendet, um die technische Funktionalität
            der Website sicherzustellen. Andere Daten können zur Analyse des
            Nutzerverhaltens genutzt werden.
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.title}>
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className={styles.subtitle}>Datenschutz</h3>
          <p>
            Wir behandeln Ihre personenbezogenen Daten vertraulich und gemäß der
            gesetzlichen Datenschutzvorschriften. Diese Datenschutzerklärung
            beschreibt, welche Daten wir erheben und zu welchem Zweck wir sie
            verwenden.
          </p>

          <h3 className={styles.subtitle}>
            Hinweis zur verantwortlichen Stelle
          </h3>
          <div>
            <strong>LIBERTY Finanz GmbH</strong>
            <br />
            Schlachterstraße 6-8, 49808 Lingen (Ems)
            <br />
            E-Mail:{" "}
            <a href="mailto:info@libertyfinanz.de">info@libertyfinanz.de</a>
          </div>

          <h3 className={styles.subtitle}>
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p>
            Sie können Ihre Einwilligung zur Verarbeitung personenbezogener
            Daten jederzeit widerrufen. Kontaktieren Sie uns einfach per E-Mail.
          </p>

          <h3 className={styles.subtitle}>
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p>
            Im Falle von Datenschutzverletzungen können Sie sich bei der
            zuständigen Aufsichtsbehörde beschweren:
          </p>
          <div>
            Industrie- und Handelskammer Osnabrück-Emsland-Grafschaft Bentheim
            <br />
            Neuer Graben 38, 49074 Osnabrück
          </div>
        </div>

        <div className={styles.box}>
          <h2 className={styles.title}>
            3. Datenerfassung auf unserer Website
          </h2>

          <h3 className={styles.subtitle}>Cookies</h3>
          <p>
            Unsere Website verwendet Cookies. Einige Cookies sind notwendig, um
            die Funktionalität der Website sicherzustellen. Andere Cookies
            helfen uns, Ihr Nutzerverhalten zu analysieren. Sie können Cookies
            in den Einstellungen Ihres Browsers deaktivieren.
          </p>

          <h3 className={styles.subtitle}>Kontaktformular</h3>
          <p>
            Wenn Sie uns über das Kontaktformular kontaktieren, speichern wir
            Ihre Daten nur für die Bearbeitung Ihrer Anfrage. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.title}>4. Analyse-Tools und Werbung</h2>

          <h3 className={styles.subtitle}>Google Analytics</h3>
          <p>
            Unsere Website nutzt Google Analytics, um das Nutzerverhalten zu
            analysieren. Wir haben die IP-Anonymisierung aktiviert, sodass Ihre
            IP-Adresse innerhalb der EU anonymisiert wird.
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.title}>5. Impressum</h2>
          <p>
            LIBERTY Finanz GmbH
            <br />
            Schlachterstraße 6-8, 49808 Lingen (Ems)
            <br />
            Handelsregister: Amtsgericht Osnabrück, HRB 220337
            <br />
            Geschäftsführer: Roman Skibner
            <br />
            Immobiliardarlehensvermittler (§ 34i Abs. 1 S. 1 GewO),
            Registrierungsnummer: D-W-162-UD96-88
            <br />
            Versicherungsmakler (§ 34d Abs. 1 GewO), Registrierungsnummer:
            D-FFGO-7UBW7-72
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DataProtaction;
