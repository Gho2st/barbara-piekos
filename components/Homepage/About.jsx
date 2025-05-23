import Button from "../UI/Buttons/Button";
import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={classes.about__container} id="o-mnie">
      <h2>
        Portretuję <br></br>Poszukuję w ciszy
      </h2>
      <div className={classes.content__wrapper}>
        <div className={classes.content__container}>
          <div className={classes.image__container}>
            <Image
              src={"/autoportet.png"}
              width={100}
              height={100}
              layout="responsive"
              alt="auportret namalowany przez autorkę strony Barbarę Piękoś"
            />
          </div>
          <div className={classes.text__container}>
            <p>
              <span>Barbara Piękoś</span> urodziła się 18 czerwca 1993 roku w
              Nowym Sączu. Wraz ze swoimi rodzicami oraz trzema siostrami
              mieszkała w małym drewnianym domku w pięknej wsi Podolu-Górowej.
              <br></br>
              <br></br> Lata dzieciństwa spędzała wśród drzew i skał. Talent i
              wsparcie, jakie otrzymała od swoich rodziców sprawiły, że mogła
              uczyć się w Liceum Plastycznym, a w późniejszych latach spełnić
              marzenie o Akademii Sztuk Pięknych im. Jana Matejki w Krakowie. W
              2020 roku ukończyła studia będąc na wydziale malarstwa w pracowni
              Janusza Matuszewskiego. <br></br>
              <br></br> Obecnie nadal mieszka na Sądecczyźnie, a malując obraz
              ma przy sobie dwóch synków oraz męża, który wspiera i jest jej
              siłą.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
