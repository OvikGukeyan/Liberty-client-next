import styles from "./contact.module.scss";
import Image from "next/image";
import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
import { SocialMedia } from "@/components";

export const metadata = {
  title: "Kontaktinformationen",
  description: "Liberty Finance Kontaktinformationen",
  keywords: "",
};

export type markersType = {
  [key: string]: {
    geoCode: {
      lat: number;
      lng: number;
    };
    popUp: string;
  };
};

const markers: markersType = {
  Liberty: {
    geoCode: {
      lat: 52.52186030000001,
      lng: 7.3159149,
    },
    popUp: "LIBERTY Finanz GmBH",
  },
  Parking: {
    geoCode: {
      lat: 52.5221054,
      lng: 7.3147535,
    },
    popUp: "LIBERTY Finanz Parking",
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
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            className={styles.logo}
            src={"/assets/logo.png"}
            alt="logo"
            width={150}
            height={150}


          />
        </div>
        <div className={styles.contact}>
          <div className={styles.info}>
            <div className={styles.contact_info}>
              <h2>Kontakt</h2>
              <address>
                <ul>
                  <li>
                    <Image
                      src={"/assets/office.png"}
                      alt="office"
                      width={24}
                      height={24}
                    />
                    LIBERTY Finanz GmbH
                  </li>
                  <li>
                    <Image
                      src={"/assets/phone.png"}
                      alt="office"
                      width={24}
                      height={24}
                    />
                    <a href="tel:0591 857463">0591 31526680</a>
                  </li>
                  <li>
                    <Image
                      src={"/assets/email.png"}
                      alt="office"
                      width={24}
                      height={24}
                    />
                    <a href="mailto:info@libertyfinanz.de">
                      info@libertyfinanz.de
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
                      Schlachterstraße 6-8, 49808 Lingen (Ems)
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
                      Kundenparkplatz
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className={styles.opening_hours}>
              <div>
                <h2>Öffnungszeiten</h2>
                <h4>Montag - Donnerstag:</h4>
                <p>
                  09:00 - 12:00 Uhr und <br />
                  14:00 - 17:00 Uhr
                </p>
                <h4>Freitag:</h4>
                <p>
                  09:00 - 14:30 Uhr <br />
                  *Termin auch außerhalb der Öffnungszeiten
                </p>
              </div>

              <SocialMedia />
            </div>
          </div>
          <div className={styles.map}>
            <Map markers={markers} />
          </div>
        </div>
      </div>
  );
};

export default Contact;
