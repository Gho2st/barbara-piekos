import Link from "next/link";
import classes from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      &copy; {currentYear} Barbara Piękoś. Projekt i realizacja{" "}
      <Link href={"https://dominikjojczyk.pl/"}>Dominik</Link>
    </footer>
  );
}
