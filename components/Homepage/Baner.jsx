import Button from "../UI/Buttons/Button";
import classes from "./Baner.module.css";
import Image from "next/image";

export default function Baner() {
  return (
    <>
      <section className={classes.baner__container}>
        <h1>Barbara Piękoś</h1>
        {/* Obraz dla wersji komputerowej */}
        <div className={classes.image__container__desktop}>
          <Image
            src={"/baner.png"}
            alt="Baner Desktop"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        {/* Obraz dla wersji mobilnej */}
        <div className={classes.image__container__mobile}>
          <Image
            src={"/obrazy/2.jpeg"}
            alt="Baner Mobile"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className={classes.image__text__container}>
          <Image
            src={"/moja natura.png"}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className={classes.buttons__container}>
          <Button link="#" text="O mnie" />
          <Button link="#" text="Czytaj wiecej" />
        </div>
      </section>
    </>
  );
}