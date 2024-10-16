import classes from "./Exhibitions.module.css";

export default function Exhibitions() {
  return (
    <section className={classes.exhibitions__container} id="wystawy">
      <h2>Wystawy</h2>
      <ul>
        <li>
          <h3>Przedmiot</h3> Wideo Galeria Małopolskiego Ogrodu Sztuki <br></br>{" "}
          (Kraków) 2015
        </li>
        <li>
          <h3>Animals IV</h3> Krowoderska Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2016
          <br></br>
        </li>
        <li>
          <h3>Blask na drzewach jakiś chory(...) Zaczęły się meteory</h3>{" "}
          Galeria Sztuki Willa Kadenówka <br></br> (Rabka-Zdrój) 2016
          <br></br>
        </li>

        <li>
          <h3>Sztuka Młodych z ASP</h3> Muzeum Okręgowe <br></br> (Sandomierz)
          2016
        </li>
        <li>
          <h3>Moja przestrzeń</h3> Galeria Zespołu Szkół Plastycznych <br></br>{" "}
          (Radom) 2016
        </li>
        <li>
          <h3>I tak minęło kilka lat</h3> Sądecka Biblioteka Publiczna <br></br>{" "}
          (Nowy Sącz) 2016
        </li>
        <li>
          <h3>Wizja wokół wiersza</h3> Krowoderska Biblioteka Publiczna{" "}
          <br></br> (Kraków) 2016
        </li>
        <li>
          <h3>Codzienność</h3> Wojewódzka Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2017
        </li>
        <li>
          <h3>Portrety rzeczy</h3> Krowoderska Biblioteka Publiczna <br></br>{" "}
          (Kraków) 2017
        </li>
        <li>
          <h3>Dojrzewanie</h3> Sądecka Biblioteka Publiczna <br></br> (Nowy
          Sącz) 2023
        </li>
      </ul>
    </section>
  );
}
