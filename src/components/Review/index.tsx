"use client";
import React, { FC } from "react";
import $api from "@/shared/http";
import styles from "./Review.module.scss";
import Image from "next/image";
import { ReviewType } from "@/shared/models/Review";

interface Props {
  item: ReviewType
}
export const Review: FC<Props> = ({item}) => {
console.log(item.user.thumbnail)

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img className={styles.avatar} src={item.user.thumbnail || "/assets/avatar.png"} alt="avatar" />
        <div className={styles.info}>
          <h3>{item.user.name}</h3>
          <div className={styles.stars}>
            {[...Array(item.rating)].map((_, index) => (
              <Image
                key={index}
                src="/assets/star.png"
                alt="star"
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.text}>
            <p>
              {item.snippet}
            </p>
      </div>
    </div>
  );
}
