"use client";
import { useRef } from "react";
import classes from "./Portfolio.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles

// LightGallery imports
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Image from "next/image";

export default function Portfolio() {
  const lightboxRef = useRef(null);

  // Images array
  const images = [
    "/obrazy/1.jpeg",
    "/obrazy/2.jpeg",
    "/obrazy/3.jpeg",
    "/obrazy/4.jpeg",
    "/obrazy/5.jpeg",
    "/obrazy/6.jpeg",
    "/obrazy/7.jpeg",
    "/obrazy/8.jpeg",
    "/obrazy/9.jpeg",
    "/obrazy/10.jpeg",
    "/obrazy/11.jpeg",
    "/obrazy/12.jpeg",
    "/obrazy/13.jpeg",
    "/obrazy/14.jpeg",
    "/obrazy/15.jpeg",
    "/obrazy/16.jpeg",
    "/obrazy/17.jpeg",
    "/obrazy/18.jpeg",
    "/obrazy/19.jpeg",
    "/obrazy/20.jpeg",
    "/obrazy/21.jpeg",
    "/obrazy/22.jpeg",
  ];

  // Alt tags array
  const altTags = [
    "Malarstwo Barbary Piękoś - obraz 1 z portfolio artystki",
    "Barbara Piękoś - obraz 2, twórczość artystyczna z Sądecczyzny",
    "Praca Barbary Piekos - obraz 3, malarstwo współczesne",
    "Barbara Piękoś - obraz 4, autoportret w ciszy",
    "Malarstwo Barbary Piękoś - obraz 5, natura i inspiracja",
    "Barbara Piekos - obraz 6, sztuka z ASP Kraków",
    "Twórczość Barbary Piękoś - obraz 7, pejzaż emocji",
    "Barbara Piękoś - obraz 8, portret namalowany ręką artystki",
    "Malarstwo Barbary Piekos - obraz 9, wizja mojej natury",
    "Barbara Piękoś - obraz 10, sztuka inspirowana dzieciństwem",
    "Praca Barbary Piękoś - obraz 11, malarstwo z duszą",
    "Barbara Piekos - obraz 12, twórczość z Nowego Sącza",
    "Malarstwo Barbary Piękoś - obraz 13, poszukiwania w ciszy",
    "Barbara Piękoś - obraz 14, sztuka współczesna artystki",
    "Twórczość Barbary Piekos - obraz 15, portrety i natura",
    "Barbara Piękoś - obraz 16, malarstwo z Sądecczyzny",
    "Barbara Piekos - obraz 17, inspiracja codziennością",
    "Malarstwo Barbary Piękoś - obraz 18, artystyczna wizja",
    "Barbara Piękoś - obraz 19, portret mojej natury",
    "Praca Barbary Piekos - obraz 20, sztuka z ASP Kraków",
    "Barbara Piękoś - obraz 21, malarstwo pełne emocji",
    "Twórczość Barbary Piękoś - obraz 22, ostatnia praca w portfolio",
  ];

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.portfolio__container} id="twórczość">
      <h2>Twórczość</h2>
      <div className={classes.content__container}>
        <LightGallery
          selector={".slick__slide"}
          speed={500}
          plugins={[lgThumbnail]} // Enable thumbnail plugin
          onInit={(detail) => {
            lightboxRef.current = detail.instance; // Assign LightGallery instance to ref
          }}
        >
          <Slider {...settings} className={classes.slider}>
            {images.map((image, index) => (
              <a
                key={index}
                href={image}
                className={"slick__slide"}
                data-src={image}
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt={altTags[index]}
                />
              </a>
            ))}
          </Slider>
        </LightGallery>
        <p className={classes.description}>
          *Kliknij w zdjęcie aby zobaczyć pełnoekranowy podgląd
        </p>
      </div>
    </section>
  );
}
