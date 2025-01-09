import { Footer, Header } from "@/components";
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
    <div className={styles.about}>
      <Image src={"/assets/logo.png"} alt="logo" width={150} height={150}/>
      <h2 className={styles.title}>Unser Team</h2>

      <div className={styles.main}>
        <div className={styles.manager}>
          <Image
            className={styles.photo}
            src={"/assets/liberty-finanz-44.jpg"}
            alt="manager"
            width={500}
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
            width={500}
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
            width={500}
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
  );
};

export default About;
