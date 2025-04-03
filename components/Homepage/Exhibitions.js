import Link from "next/link";
import classes from "./Exhibitions.module.css";
import Button from "../UI/Buttons/Button";

export default function Exhibitions() {
  return (
    <section className={classes.exhibitions__container} id="wystawy">
      <h2>Wystawy</h2>
      <h3>Zbiorowe</h3>
      <ul>
        <li>
          <h4>Przedmiot</h4> Wideo Galeria Małopolskiego Ogrodu Sztuki <br></br>{" "}
          (Kraków) 2015
        </li>
        <li>
          <h4>Animals IV</h4> Krowoderska Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2016
          <br></br>
        </li>
        <li>
          <h4>Blask na drzewach jakiś chory(...) Zaczęły się meteory</h4>{" "}
          Galeria Sztuki Willa Kadenówka <br></br> (Rabka-Zdrój) 2016
          <br></br>
          <Button
            link="https://www.kadenowka.com/blask-na-drzewach-jakis-chory"
            text="Czytaj więcej"
          />
        </li>

        <li>
          <h4>Sztuka Młodych z ASP</h4> Muzeum Okręgowe <br></br> (Sandomierz)
          2016
        </li>
        <li>
          <h4>Moja przestrzeń</h4> Galeria Zespołu Szkół Plastycznych <br></br>{" "}
          (Radom) 2016
        </li>
        <li>
          <h4>Codzienność</h4> Wojewódzka Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2017
        </li>
        <li>
          <h4>Caspar David Friedrich - romantyk z Pomorza</h4> Wystawa
          pokonkursowa <br></br> (Muzeum Narodowe w Szczecinie) 2024
        </li>
        <li>
          <h4>
            Wyobraźnia kazała mi odbyć tę podróż...obrazy wierszem malowane
          </h4>
          Wystawa pokonkursowa - 1 miejsce <br></br> (SBP Nowy Sącz ) 2023
        </li>
      </ul>
      <h3>Indywidualne</h3>
      <ul>
        <li>
          <h4>I tak minęło kilka lat</h4> Sądecka Biblioteka Publiczna <br></br>{" "}
          (Nowy Sącz) 2016
        </li>
        <li>
          <h4>Wizja wokół wiersza</h4> Krowoderska Biblioteka Publiczna{" "}
          <br></br> (Kraków) 2016
        </li>
        <li>
          <h4>Portrety rzeczy</h4> Krowoderska Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2017
        </li>
        <li>
          <h4>Dojrzewanie</h4> Sądecka Biblioteka Publiczna <br></br> (Nowy
          Sącz) 2023 <br></br>
          <Button
            link="https://sbp.nowysacz.pl/dojrzewanie-wystawa-prac-barbary-piekos/"
            text="Czytaj więcej"
          />
        </li>
      </ul>
    </section>
  );
}
