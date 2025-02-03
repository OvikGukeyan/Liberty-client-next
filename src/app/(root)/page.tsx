import Image from "next/image";
import styles from "../page.module.scss";
import Slide from "@/components/Slide";
import { Carousel, CookieConsent, Header, Review } from "@/components";
import servicesList from "../../../data/servicesList";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.box_1}>
        <div className={styles.main}>
          <Header />
        </div>
        <div className={styles.services}>
          <Carousel controllers auto autoplaySpeed={8000}>
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
            Wir sind freie Makler im Bereich Versicherung und Finanzierung und
            bieten Ihnen maßgeschneiderte Lösungen, die genau auf Ihre
            Bedürfnisse abgestimmt sind. Als unabhängige Berater sind wir nicht
            an bestimmte Anbieter gebunden – das bedeutet für Sie eine neutrale,
            transparente und kundenorientierte Beratung.
          </p>
        </div>
        <div className={styles.photo_2}>
          <div className={styles.title}>
            <Image
              src="/assets/google.png"
              alt="google"
              width={25}
              height={25}
            />
            <span>Google Bewertungen</span>
          </div>
          <Carousel auto autoplaySpeed={10000}>
            {[...Array(4)].map((item, ind) => (
              <Review />
            ))}
          </Carousel>
        </div>
      </div>
      <CookieConsent />
    </div>
  );
}
