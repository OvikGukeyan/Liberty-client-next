"use client";
import React, { useState, useEffect, FC, useCallback } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SocialMedia } from "../";
import Link from "next/link";

type FooterType = {
  isStatic: boolean;
};

export const Footer: FC<FooterType> = ({ isStatic }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - 1;
      setIsVisible(scrollPosition >= totalHeight);
    }
  }, []);

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
      className={`${styles.footer} ${isVisible && styles.visible} ${
        isStatic && styles.static
      }`}
    >
      <div className={styles.main}>
        <div className={styles.logo}>
          <Image
            src={"/assets/logo-full.png"}
            alt="Logo"
            width={60}
            height={60}
          />
        </div>
        <ul className={styles.links}>
          <Link href="/impressum">
            <li>Impressum</li>
          </Link>

          <Link href="/data-protaction">
            <li>Datenschutzerklärung</li>
          </Link>

          <Link href="/contact">
            <li>Kontakt</li>
          </Link>
        </ul>
        <SocialMedia />
      </div>
      <div className={styles.copyright}>
        <span>© 2023 Liberty Finance GmbH</span>
      </div>
    </div>
  );
};
