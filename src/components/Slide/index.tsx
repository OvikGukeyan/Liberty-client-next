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
  list?: boolean;
}
const Slide: FC<Props> = ({ item, list }) => {
  return (
    <div className={styles.slide}>
      <Link href="/services">
        <h1>{item.title}</h1>
      </Link>

      <p> {item.text} </p>
      {list && (
        <ul className={styles.features}>
          {item.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      )}

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
