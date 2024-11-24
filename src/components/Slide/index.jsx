import React from "react";
import styles from "./Slide.module.scss";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Slide = ({ item }) => {
  return (
    <div className={styles.slide}>
      <h1>{item.name}</h1>
      <p> {item.text} </p>
      <Link href={'/formular'}>
        <button>
          <span>TERMIN VEREINBARUNG</span>
          <MoveRight width={25} height={25}/>
        </button>
      </Link>
    </div>
  );
};

export default Slide;
