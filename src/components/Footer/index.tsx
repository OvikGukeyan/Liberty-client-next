"use client";
import React, { useState, useEffect, FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

type FooterType = {
  isStatic: boolean;
};

export const Footer: FC<FooterType> = ({ isStatic }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      const scrollPosition = window.scrollY + window.innerHeight ;
      const totalHeight = document.documentElement.scrollHeight - 1;

      setIsVisible(scrollPosition >= totalHeight);
    }
  };

  useEffect(() => {
    if (isStatic) {
      return setIsVisible(true);
    }
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles.footer} ${isVisible && styles.visible} ${isStatic && styles.static
        }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <Image
              src={"/assets/logo-full.png"}
              alt="Logo"
              width={60}
              height={60}
            />
          </div>
          <div className={styles.social_media}>
            <Image src={'/assets/instagram.png'} alt="instagram" width={24} height={24} />
            <Image src={'/assets/youtube.png'} alt="youtube" width={24} height={24} />
            <Image src={'/assets/tiktok.png'} alt="tiktok" width={24} height={24} />
          </div>
        </div>
        <div className={styles.main}>
          <div>
            <h5>OUR COMPANY</h5>
            <ul>
              <li>HOW WE WORK</li>
              <li>WHY INSURE?</li>
              <li>VIEW PLANS</li>
              <li>REVIEWS</li>
            </ul>
          </div>
          <div>
            <h5>HELP ME</h5>
            <ul>
              <li>FAQ</li>
              <li>TERMS OF USE</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIES</li>
            </ul>
          </div>
          <div>
            <h5>CONTACT</h5>
            <ul>
              <li>SALES</li>
              <li>SUPPORT</li>
              <li>LIVE CHAT</li>
            </ul>
          </div>
          <div>
            <h5>OTHERS</h5>
            <ul>
              <li>CAREERS</li>
              <li>PRESS</li>
              <li>LICENSES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

