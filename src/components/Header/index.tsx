"use client";
import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const headerItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "karriere", href: "/career" },
  { name: "coworking", href: "/coworking" },
  { name: "contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuVisiable, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const router = useRouter();
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

  const handleNavLinkClick = (href: string) => {
    setIsMenuVisible(false);
    router.push(href);
  };
  return (
    <header className={styles.header}>
      <Menu
        onClick={handleHamburgerClick}
        width={40}
        height={40}
        className={styles.hamburger}
      />

      <div
        onClick={(e) => handleOutsideClick(e)}
        className={`${styles.overlay} ${
          isMenuVisiable ? styles.overlayVisible : ""
        }`}
      >
        <nav ref={menuRef}>
          <X
            onClick={handleHamburgerClick}
            width={30}
            height={30}
            className={styles.close}
          />
          <ul>
            {headerItems.map((item) => (
              <li
                key={item.name}
                className={`${styles.header_item} ${
                  pathName === item.href && styles.invisible
                }`}
                onClick={() => handleNavLinkClick(item.href)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
