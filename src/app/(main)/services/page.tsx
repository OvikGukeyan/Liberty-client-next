import { Wrapper } from "@/components";
import React from "react";
import styles from "./services.module.scss";
import Image from "next/image";
import Slide from "@/components/Slide";
import  servicesList  from "../../../../data/servicesList";

const Services = () => {
  return (
    <Wrapper>
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

        <h1 className={styles.title}>
          Unser Leistungsspektrum umfasst:
        </h1>
        <div className={styles.services}>
          {servicesList.map((item, ind) => (
            <Slide key={ind} item={item} list/>
          ))}
        </div>

      </div>
    </Wrapper>
  );
};

export default Services;
