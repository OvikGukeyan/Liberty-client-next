import { Wrapper } from "@/components";
import styles from "./about.module.scss";
import Image from "next/image";
import { FC } from "react";

export const metadata = {
  title: "About Us",
  description: "Info about us",
  keywords: "",
};

const About: FC = () => {
  return (
    <Wrapper>
      <div className={styles.about}>
        <div className={styles.image}>
          <Image
            className={styles.logo}
            src={"/assets/logo.png"}
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <h2 className={styles.title}>
          Über uns <br /> Ihre unabhängigen Experten für Versicherung &
          Finanzierung
        </h2>

        <p className={styles.description}>
          Wir sind freie Makler im Bereich Versicherung und Finanzierung und
          bieten Ihnen maßgeschneiderte Lösungen, die genau auf Ihre Bedürfnisse
          abgestimmt sind. Als unabhängige Berater sind wir nicht an bestimmte
          Anbieter gebunden – das bedeutet für Sie eine neutrale, transparente
          und kundenorientierte Beratung.
        </p>

        <span className={styles.list_title}>
          Unser Leistungsspektrum umfasst:
        </span>
        <ul className={styles.list}>
          <li>
            Versicherungen: Individuelle Absicherung für Privatpersonen &
            Unternehmen
          </li>
          <li>Baufinanzierung: Die beste Finanzierung für Ihr Eigenheim</li>
          <li>
            Modernisierungsdarlehen: Flexible Lösungen für Ihre Wohnprojekte
          </li>
          <li>
            Altersvorsorge & Investment: Finanzielle Sicherheit für Ihre
            Zukunft
          </li>
        </ul>

        <p className={styles.description}>
          Mit unserer Erfahrung, Marktkenntnis und persönlichem Engagement
          begleiten wir Sie von der ersten Beratung bis zur optimalen Lösung.
          Ihr Vorteil: Unabhängige Beratung, beste Konditionen und
          maßgeschneiderte Konzepte!
        </p>

        <h2 className={styles.title}>Unser Team</h2>

        <div className={styles.main}>
          <div className={styles.manager}>
            <Image
              className={styles.photo}
              src={"/assets/liberty-finanz-44.jpg"}
              alt="manager"
              width={320}
              height={500}
            />
            <div className={styles.text}>
              <h3>
                David Zgibnev <br /> Ihr Experte für Kreditlösungen
              </h3>
              <span>Tel: +49 123 456 789</span>
              <span>Email: 2L3ZK@example.com</span>
            </div>
          </div>
          <div className={styles.manager}>
            <Image
              className={styles.photo}
              src={"/assets/liberty-finanz-28.jpg"}
              alt="manager"
              width={320}
              height={500}
            />
            <div className={styles.text}>
              <h3>
                David Zgibnev <br /> Ihr Experte für Kreditlösungen
              </h3>
              <span>Tel: +49 123 456 789</span>
              <span>Email: 2L3ZK@example.com</span>
            </div>
          </div>
          <div className={styles.manager}>
            <Image
              className={styles.photo}
              src={"/assets/liberty-finanz-1.jpg"}
              alt="manager"
              width={320}
              height={500}
            />
            <div className={styles.text}>
              <h3>
                David Zgibnev <br /> Ihr Experte für Kreditlösungen
              </h3>
              <span>Tel: +49 123 456 789</span>
              <span>Email: 2L3ZK@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
