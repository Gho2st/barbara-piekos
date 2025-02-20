"use client";
import classes from "./Baner.module.css";
import Image from "next/image";

export default function Baner() {
  return (
    <section className={classes.baner__container}>
      {/* Animowany nagłówek */}
      <h1>Barbara Piękoś</h1>

      {/* Obraz dla wersji komputerowej */}
      <div className={classes.image__container__desktop}>
        <Image
          src={"/baner.png"}
          alt="Baner w postaci obrazu wykonanego przez autorkę Barbarę Piękoś"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      {/* Obraz dla wersji mobilnej */}
      <div className={classes.image__container__mobile}>
        <Image
          src={"/obrazy/3.jpeg"}
          alt="Baner w postaci obrazu wykonanego przez autorkę Barbarę Piękoś"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      {/* Napis */}
      <div className={classes.image__text__container}>
        <Image
          src={"/moja natura.png"}
          width={100}
          height={100}
          alt="Odręczny napis 'moja natura'"
          layout="responsive"
        />
      </div>
    </section>
  );
}
