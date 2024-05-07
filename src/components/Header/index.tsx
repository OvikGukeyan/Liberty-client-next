"use client";
import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuVisiable, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (menuRef.current) {
      if (!menuRef.current.contains(e.target as Node)) {
        setIsMenuVisible(false);
        document.body.style.overflow = "";
      }
    }
  };

  const handleHamburgerClick = () => {
    setIsMenuVisible(!isMenuVisiable);
    // if (!isMenuVisiable) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "";
    // }
  };
  return (
    <header className={styles.header}>
      <Image
        onClick={handleHamburgerClick}
        src={"/assets/hamburger.png"}
        alt="hamburger"
        width={40}
        height={40}
        className={styles.hamburger}
      />

      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src={"/assets/logo-full.png"}
            alt="Logo"
            width={160}
            height={160}
          />
        </Link>
      </div>
      <div
        onClick={(e) => handleOutsideClick(e)}
        className={`${styles.overlay} ${
          isMenuVisiable ? styles.overlayVisible : ""
        }`}
      >
        <nav ref={menuRef}>
          <Image
            onClick={handleHamburgerClick}
            src={"/assets/close.png"}
            alt="close"
            width={30}
            height={30}
            className={styles.close}
          />
          <ul>
            <Link href={"/"}>
              <li>home</li>
            </Link>
            <Link href={"/about"}>
              <li>about</li>
            </Link>
            <Link href={"/"}>
              <li>karriere</li>
            </Link>
            <Link href={"/"}>
              <li>coworking</li>
            </Link>
            <Link href={"/contact"}>
              <li>contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
