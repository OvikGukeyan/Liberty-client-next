import Image from "next/image";
import styles from "./page.module.scss";
import Slide from "@/components/Slide";
import { Carousel, Footer, Header } from "@/components";

const servicesList = [
  {
    name: "Versicherung",
    text: "Wir bieten maßgeschneiderte Versicherungslösungen für Ihr Zuhause an. Schützen Sie Ihr Eigentum vor unvorhergesehenen Ereignissen mit unseren flexiblen Versicherungsprodukten. Verlassen Sie sich auf uns, um Ihre Bedürfnisse zu verstehen und Ihnen den richtigen Schutz zu bieten.",
  },
  {
    name: "Baufinanzierung",
    text: "Sichern Sie sich Ihr Traumhaus mit unserer maßgeschneiderten Baufinanzierungslösung. Egal, ob Neubau, Kauf oder Umbau - wir bieten Ihnen flexible Finanzierungsoptionen, um Ihr Bauprojekt zu realisieren. Vertrauen Sie auf unsere langjährige Erfahrung, um Ihre individuellen Bedürfnisse zu verstehen und Ihnen die passende Baufinanzierung anzubieten.",
  },
  {
    name: "Privatkredit",
    text: "Erfüllen Sie sich Ihre persönlichen Wünsche mit unserem maßgeschneiderten Privatkredit. Egal, ob Sie eine Reise planen, ein Auto kaufen oder eine Renovierung vornehmen möchten - wir bieten Ihnen flexible Kreditoptionen, um Ihre finanziellen Ziele zu erreichen. Verlassen Sie sich auf unsere Expertise, um Ihnen den richtigen Privatkredit anzubieten.",
  },
  {
    name: "Autokredit",
    text: "Machen Sie sich den Autokauf leicht mit unserem maßgeschneiderten Autokredit. Egal, ob Neu- oder Gebrauchtwagen - wir bieten Ihnen flexible Finanzierungsmöglichkeiten, um Ihren Autokauf zu erleichtern. Vertrauen Sie auf unsere Kompetenz, um Ihnen den passenden Autokredit anzubieten.",
  },
  {
    name: "Kapitalaufbau",
    text: "Planen Sie Ihre finanzielle Zukunft mit unserem maßgeschneiderten Kapitalaufbau-Programm. Egal, ob Sie für den Ruhestand vorsorgen, ein finanzielles Polster schaffen oder langfristig investieren möchten - wir bieten Ihnen strategische Anlageoptionen, um Ihr Kapital aufzubauen. Verlassen Sie sich auf unsere Experten, um Ihnen dabei zu helfen, Ihre finanziellen Ziele zu erreichen.",
  },
  {
    name: "Immobilien",
    text: "Investieren Sie in Ihre Zukunft mit unserer maßgeschneiderten Immobilienlösung. Egal, ob Sie kaufen, verkaufen oder investieren möchten - wir bieten Ihnen umfassende Beratung und Unterstützung, um Ihre Immobilienziele zu erreichen. Vertrauen Sie auf unsere Erfahrung, um Ihnen bei jedem Schritt des Immobilienprozesses zu helfen.",
  },
];



export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box_1}>
        <div className={styles.main}>
          <video
            muted
            autoPlay
            className={styles.video}
            src="./assets/Lingen1.mp4"
            playsInline
          />
          <Header />
        </div>
        <div className={styles.services}>
          <Carousel controllers>
            {servicesList.map((item, ind) => (
              <Slide key={ind} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.box_2}>
        <div className={styles.photo_1}></div>
        <div className={styles.about}>
          <h3>ÜBER UNSERE FIRMA</h3>
          <p>
            Willkommen bei Liberty Finance, Ihrem zuverlässigen Partner für
            Versicherungs- und Finanzierungslösungen. Wir bieten
            maßgeschneiderte Produkte für Hausbesitzer an, um ihr Eigentum zu
            schützen und ihre Wohnträume zu verwirklichen. Kontaktieren Sie uns
            für professionelle Beratung und persönlichen Service.
          </p>
        </div>
        <div className={styles.photo_2}>
          <Carousel auto>
            {[...Array(5)].map((item, ind) => (
              <span key={ind} style={{backgroundColor: '#000', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Slide {ind + 1}</span>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer isStatic={false} />
    </div>
  );
}
