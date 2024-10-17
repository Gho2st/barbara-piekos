"use client";
import { motion } from "framer-motion";
import Button from "../UI/Buttons/Button";
import classes from "./Baner.module.css";
import Image from "next/image";

export default function Baner() {
  return (
    <section className={classes.baner__container}>
      {/* Animowany nagłówek */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Start (niewidoczny, przesunięty w górę)
        animate={{ opacity: 1, y: 0 }} // Animacja (pojawienie i przesunięcie na miejsce)
        transition={{ duration: 1.2, delay: 0.5 }} // Opóźnienie
      >
        Barbara Piękoś
      </motion.h1>

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
