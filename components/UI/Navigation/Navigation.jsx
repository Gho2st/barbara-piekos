"use client"; // Klientowy komponent React

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"; // Import Framer Motion
import classes from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Zamyka menu
  };

  return (
    <div className={classes.nav__wrapper}>
      <div className={classes.nav__container}>
        <div className={classes.navigation__button} onClick={toggleMenu}>
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Framer Motion for animated menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }} // Starting from outside the screen
        animate={menuOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }} // Animate in or out
        transition={{ duration: 0.5 }} // Control speed of animation
        className={`${classes.open__menu__container} ${
          menuOpen ? classes.active : ""
        }`}
      >
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Strona Główna
            </Link>
          </li>
          <li>
            <Link href="/#o-mnie" onClick={closeMenu}>
              O Mnie
            </Link>
          </li>
          <li>
            <Link href="/#twórczość" onClick={closeMenu}>
              Twórczość
            </Link>
          </li>
          <li>
            <Link href="/#wystawy" onClick={closeMenu}>
              Wystawy
            </Link>
          </li>
          <li>
            <Link href="/#kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
