import Button from "../UI/Buttons/Button";
import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={classes.about__container}>
      <h2>
        Portretuję <br></br>Poszukuję w ciszy
      </h2>
      <div className={classes.content__wrapper}>
        <div className={classes.content__container}>
          <div className={classes.image__container}>
            <Image
              src={"/portret-barbara.png"}
              width={100}
              height={100}
              layout="responsive"
              alt="auportret namalowany przez autorkę strony Barbarę Piękoś"
            />
          </div>
          <div>
            <span id="O-mnie">Barbara Piękoś</span>
            <p>
              Urodzona w 1993 roku w Nowym Sączu.<br></br> <br></br> W 2020 roku
              ukończyła Akademię Sztuk Pięknych w Krakowie.
            </p>
            <div className={classes.button__container}>
              <Button text="Kontakt" link="/#kontakt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
