"use client";
import { motion } from "framer-motion";
import Button from "../UI/Buttons/Button";
import classes from "./Baner.module.css";
import Image from "next/image";

export default function Baner() {
  return (
    <motion.section
      className={classes.baner__container}
      initial={{ opacity: 0 }} // Początkowy stan (niewidoczny)
      animate={{ opacity: 1 }} // Animacja (fade-in)
      transition={{ duration: 1.2 }} // Czas trwania animacji
    >
      {/* Animowany nagłówek */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Start (niewidoczny, przesunięty w górę)
        animate={{ opacity: 1, y: 0 }} // Animacja (pojawienie i przesunięcie na miejsce)
        transition={{ duration: 1.2, delay: 0.5 }} // Opóźnienie
      >
        Barbara Piękoś
      </motion.h1>

      {/* Obraz dla wersji komputerowej */}
      <motion.div
        className={classes.image__container__desktop}
        initial={{ opacity: 0, x: -100 }} // Start (niewidoczny, przesunięty w lewo)
        animate={{ opacity: 1, x: 0 }} // Animacja (przesunięcie na miejsce)
        transition={{ duration: 1.2, delay: 0.8 }} // Opóźnienie
      >
        <Image
          src={"/baner.png"}
          alt="Baner w postaci obrazu wykonanego przez autorkę Barbarę Piękoś"
          width={100}
          height={100}
          layout="responsive"
        />
      </motion.div>

      {/* Obraz dla wersji mobilnej */}
      <motion.div
        className={classes.image__container__mobile}
        initial={{ opacity: 0, x: -100 }} // Start (niewidoczny, przesunięty w lewo)
        animate={{ opacity: 1, x: 0 }} // Animacja (przesunięcie na miejsce)
        transition={{ duration: 1.2, delay: 1 }} // Opóźnienie
      >
        <Image
          src={"/obrazy/3.jpeg"}
          alt="Baner w postaci obrazu wykonanego przez autorkę Barbarę Piękoś"
          width={100}
          height={100}
          layout="responsive"
        />
      </motion.div>

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
    </motion.section>
  );
}
