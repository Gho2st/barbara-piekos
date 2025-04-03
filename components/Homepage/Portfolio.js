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
    "Obraz 1 z portfolio Barbary Piękoś - malarstwo artystyczne",
    "Barbara Piękoś - obraz 2 z Sądecczyzny",
    "Pejzaż Barbary Piękoś - obraz 3 współczesny",
    "Autoportret Barbary Piękoś - obraz 4",
    "Natura w malarstwie Barbary Piękoś - obraz 5",
    "Barbara Piękoś - obraz 6 z ASP Kraków",
    "Emocje w sztuce Barbary Piękoś - obraz 7",
    "Portret Barbary Piękoś - obraz 8",
    "Pejzaż natury Barbary Piękoś - obraz 9",
    "Dzieciństwo w sztuce Barbary Piękoś - obraz 10",
    "Barbara Piękoś - obraz 11 z duszą",
    "Twórczość Barbary Piękoś - obraz 12 z Nowego Sącza",
    "Sztuka Barbary Piękoś - obraz 13 w ciszy",
    "Barbara Piękoś - obraz 14 współczesny",
    "Portrety natury Barbary Piękoś - obraz 15",
    "Barbara Piękoś - obraz 16 z Sądecczyzny",
    "Codzienność w malarstwie Barbary Piękoś - obraz 17",
    "Wizja artystyczna Barbary Piękoś - obraz 18",
    "Portret natury Barbary Piękoś - obraz 19",
    "Barbara Piękoś - obraz 20 z ASP Kraków",
    "Emocje Barbary Piękoś - obraz 21",
    "Ostatni obraz Barbary Piękoś - portfolio 22",
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
