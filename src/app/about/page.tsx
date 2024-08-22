import { Footer, Header } from "@/components";
import styles from "./about.module.scss";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Info about us",
  keywords: "",
};

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.main}>
        <h2>Führungskräfte unseres Unternehmens</h2>
        <div className={styles.managers}>
          <Image
            className={styles.photo}
            src={"/assets/2.jpeg"}
            alt="manager"
            width={500}
            height={500}
          />
          <div className={styles.text}>
            <h3>Roman Skibner und Mathias Alberg – Geschäftsführer.</h3>

            <p>
              Roman Skibner und Mathias Alberg sind die treibenden Kräfte hinter
              unserer Firma, die auf Versicherungen und Kreditvergabe
              spezialisiert ist. Beide verfügen über eine tiefe Verwurzelung in
              der Finanzbranche und bringen jeweils mehr als ein Jahrzehnt
              Erfahrung mit.
              <br />
              <br />
              Roman Skibner hat sich durch seine strategische Vision und sein
              Engagement für maßgeschneiderte Finanzlösungen einen Namen
              gemacht. Seine Fähigkeit, vorausschauend zu denken und innovative
              Ansätze zu entwickeln, hat es unserem Unternehmen ermöglicht,
              stets an der Spitze des Marktes zu stehen.
            </p>
          </div>
        </div>
        <h2>Unser Team</h2>

        <div className={styles.managers}>
          <Image
            className={styles.photo}
            src={"/assets/3.jpg"}
            alt="manager"
            width={500}
            height={500}
          />
          <div className={styles.text}>
            <h3>David Zgibnev – Ihr Experte für Kreditlösungen</h3>
            <p>
              David Zgibnev, unser Spezialist für Kreditvergabe, bringt über ein
              Jahrzehnt Erfahrung in der Finanzbranche mit. Mit einem tiefen
              Verständnis für die Dynamik des Kreditmarktes und einer
              Leidenschaft für die Entwicklung individueller Finanzlösungen hat
              sich David als wertvolles Mitglied unseres Teams etabliert.
              <br />
              <br />
              Seine Expertise erstreckt sich über verschiedenste Aspekte der
              Kreditvergabe, von der Bewertung der Kreditwürdigkeit bis hin zur
              maßgeschneiderten Gestaltung von Kreditpaketen, die speziell auf
              die Bedürfnisse unserer Kunden zugeschnitten sind. Durch seine
              analytische Denkweise und sein Engagement für Exzellenz
              gewährleistet David, dass unsere Kreditangebote nicht nur
              konkurrenzfähig, sondern auch besonders kundenfreundlich sind.{" "}
              <br />
              <br />
              David ist bekannt für seinen methodischen Ansatz, der stets auf
              Transparenz und Vertrauen basiert. Er arbeitet eng mit Kunden
              zusammen, um sicherzustellen, dass sie die für sie optimalen
              Finanzierungsentscheidungen treffen können. Seine Beratung hilft
              unseren Kunden, ihre finanziellen Ziele zu erreichen und dabei
              sicher und informiert vorzugehen.
            </p>
          </div>
        </div>
        <div className={styles.managers}>
          <Image
            className={styles.photo}
            src={"/assets/4.jpeg"}
            alt="manager"
            width={500}
            height={500}
          />
          <div className={styles.text}>
            <h3>David Zgibnev – Ihr Experte für Kreditlösungen</h3>
            <p>
              David Zgibnev, unser Spezialist für Kreditvergabe, bringt über ein
              Jahrzehnt Erfahrung in der Finanzbranche mit. Mit einem tiefen
              Verständnis für die Dynamik des Kreditmarktes und einer
              Leidenschaft für die Entwicklung individueller Finanzlösungen hat
              sich David als wertvolles Mitglied unseres Teams etabliert.
              <br />
              <br />
              Seine Expertise erstreckt sich über verschiedenste Aspekte der
              Kreditvergabe, von der Bewertung der Kreditwürdigkeit bis hin zur
              maßgeschneiderten Gestaltung von Kreditpaketen, die speziell auf
              die Bedürfnisse unserer Kunden zugeschnitten sind. Durch seine
              analytische Denkweise und sein Engagement für Exzellenz
              gewährleistet David, dass unsere Kreditangebote nicht nur
              konkurrenzfähig, sondern auch besonders kundenfreundlich sind.{" "}
              <br />
              <br />
              David ist bekannt für seinen methodischen Ansatz, der stets auf
              Transparenz und Vertrauen basiert. Er arbeitet eng mit Kunden
              zusammen, um sicherzustellen, dass sie die für sie optimalen
              Finanzierungsentscheidungen treffen können. Seine Beratung hilft
              unseren Kunden, ihre finanziellen Ziele zu erreichen und dabei
              sicher und informiert vorzugehen.
            </p>
          </div>
        </div>
      </div>
      <Footer isStatic={false} />
    </div>
  );
};

export default About;
