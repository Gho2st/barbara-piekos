"use client";
import Link from "next/link";
import classes from "./Footer.module.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Funkcja do przewinięcia strony na samą górę
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Płynne przewijanie
    });
  };

  return (
    <footer className={classes.footer}>
      &copy; {currentYear} Barbara Piękoś. Projekt i realizacja{" "}
      <Link href={"https://domiweb.pl/"}>Domiweb</Link>
      <div className={classes.policy}>
        <a href="/polityka-prywatnosci.pdf" target="_blank">
          Polityka Prywatności
        </a>
      </div>
      <span onClick={scrollToTop} className={classes.arrow}>
        <FaArrowUp />
      </span>
    </footer>
  );
}
