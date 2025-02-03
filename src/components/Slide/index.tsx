import React, { FC } from "react";
import styles from "./Slide.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface Props {
  item: {
    name: string;
    text: string;
    title: string;
    features: string[];
    cta: string;
  };
}
const Slide: FC<Props> = ({ item }) => {
  return (
    <div className={styles.slide}>
      <h1>{item.title}</h1>
      <p> {item.text} </p>
      <ul className={styles.features}>
        {item.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <p>{item.cta}</p>
      <Link href={"/formular"}>
        <button>
          <span>TERMIN VEREINBARUNG</span>
          <MoveRight width={25} height={25} />
        </button>
      </Link>
    </div>
  );
};

export default Slide;
