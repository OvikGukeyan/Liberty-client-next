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
            Versicherungen <br /> Individuelle Absicherung für Privatpersonen &
            Unternehmen
          </li>
          <li>
            Baufinanzierung <br /> Die beste Finanzierung für Ihr Eigenheim
          </li>
          <li>
            Modernisierungsdarlehen <br /> Flexible Lösungen für Ihre
            Wohnprojekte
          </li>
          <li>
            Altersvorsorge & Investment <br /> Finanzielle Sicherheit für Ihre
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
            <div className={styles.photo_box}>
              <Image
                className={styles.photo}
                src={"/assets/liberty-finanz-44.jpg"}
                alt="manager"
                width={320}
                height={500}
              />
            </div>
            <div className={styles.text}>
              <h3>Roman Skibner</h3>
              <h4>Geschäftsführender - Gesellschafter</h4>
              <span>Baufinanzierungsberater</span>

              <span>Tel: 0591 31526680</span>
              <span>Email: r.skibner@libertyfinanz.de</span>
            </div>
          </div>

          <div className={styles.manager}>
            <div className={styles.photo_box}>
              <Image
                className={styles.photo}
                src={"/assets/liberty-finanz-1.jpg"}
                alt="manager"
                width={320}
                height={500}
              />
            </div>

            <div className={styles.text}>
              <h3>Nikita Gordeev</h3>
              <h4>Assistenz der Geschäftsführung</h4>
              <span>
                Baufinanzierungsberater <br /> Versicherungsfachmann
              </span>

              <span>Tel: 0591 31526680</span>
              <span>Mobil: 0152 22961832</span>
              <span>Email: n.gordeev@libertyfinanz.de</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
