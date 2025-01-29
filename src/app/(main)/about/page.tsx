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
