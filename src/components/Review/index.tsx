"use client";
import React, { useEffect, useState } from "react";
import $api from "@/shared/http";
import styles from "./Review.module.scss";
import Image from "next/image";

export function Review() {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReview = async () => {
  //     const data = $api.get("/reviews");
  //     console.log(data);
  //   };

  //   fetchReviews();
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image src="/assets/avatar.png" alt="avatar" width={50} height={50} />
        <div className={styles.info}>
          <h3>Ivan Ivanov</h3>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloribus nisi voluptas, voluptatum, eum quia officiis, natus
            </p>
      </div>
    </div>
  );
}
