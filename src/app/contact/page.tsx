import styles from "./contact.module.scss";
import { LatLngExpression } from "leaflet";
import Image from "next/image";
import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
import { Footer, Header } from "@/components";

export const metadata = {
  title: "Kontaktinformationen",
  description: "Liberty Finance Kontaktinformationen",
  keywords: "",
};

export type markersType = {
  [key: string]: {
    geoCode: LatLngExpression;
    popUp: string;
  };
};

const markers: markersType = {
  Liberty: {
    geoCode: [52.525783, 7.332966],
    popUp: "Liberty Finance GmBH",
  },
  Parking: {
    geoCode: [52.529783, 7.334966],
    popUp: "Liberty Finance Parking",
  },
};

const Contact: FC = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading...</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className={styles.contact}>
      <Header />
      <div className={styles.box}>
        <div className={styles.info}>
          <div className={styles.contact_info}>
            <h2>Kontact</h2>
            <address>
              <ul>

                <li>
                  <Image
                    src={"/assets/office.png"}
                    alt="office"
                    width={24}
                    height={24}
                  />
                  Liberty Finance GmbH
                </li>
                <li>
                  <Image
                    src={"/assets/phone.png"}
                    alt="office"
                    width={24}
                    height={24}
                  />
                  <a href="tel:0591 857463">0591 857463</a>
                </li>
                <li>
                  <Image
                    src={"/assets/email.png"}
                    alt="office"
                    width={24}
                    height={24}
                  />
                  <a href="mailto:info@libertyfinance.de">
                    info@libertyfinance.de
                  </a>
                </li>

                <li>
                  <Image
                    src={"/assets/adress.png"}
                    alt="office"
                    width={24}
                    height={24}
                  />
                  <a href="https://www.google.com/maps?q=52.525783,7.332966">
                    Burgstraße 48, 49808 Lingen (Ems)
                  </a>
                </li>

                <li>
                  <Image
                    src={"/assets/parking.png"}
                    alt="parking"
                    width={24}
                    height={24}
                  />
                  <a href="https://www.google.com/maps?q=52.525783,7.332966">
                    Parking place
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className={styles.opening_hours}>
            <h2>Öfnungszeiten</h2>
            <h4>Montag - Donnerstag:</h4>
            <p>
              08:00 - 13:00 Uhr und <br />
              13:45 - 17:30 Uhr
            </p>
            <h4>Freitag:</h4>
            <p>
              08:00 - 13:00 Uhr und <br />
              13:45 - 16:45 Uhr
            </p>
          </div>
        </div>
        <div className={styles.map}>
          <Map markers={markers} />
        </div>
      </div>
      <Footer isStatic={true} />
    </div>
  );
};

export default Contact;
