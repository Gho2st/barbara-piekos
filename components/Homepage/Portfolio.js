"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./Portfolio.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PhotoSwipe imports
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/photoswipe.css";

// Next.js Image component
import Image from "next/image";

export default function Portfolio() {
  const lightboxRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({});

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

  const exhibits = [
    {
      title: "Podole-Górowa 61",
      description: "olej na tekturze I 41 x 33 I 2025",
      text: `Arturek po powrocie z przedszkola powiedział: "Mamusiu, zaprosiłem kolegów do nas" - Dobrze, a powiedziałeś gdzie mieszkamy? - Tak. W Polsce. To było zabawne i zarazem wzruszające. Moją POLSKĄ, gdy miałam 3 lata, był drewniany dom z numerem 61 w Podolu-Górowej oraz rodzina i przedmioty, które ten dom wypełniały.`,
      image: "/obrazy2/1.jpeg",
    },
    {
      title: "Ingradient",
      description: "13 x 18 I  2023",
      text: ``,
      image: "/obrazy2/2.jpeg",
    },
    {
      title: "Dziękuję tato",
      description: "olej na płótnie I 18 x 18 I 2022",
      text: ``,
      image: "/obrazy2/3.jpeg",
    },
    {
      title: "Autoportret przy sztaludze",
      description: "olej na płótnie I 18 x 18 I 2023",
      text: ``,
      image: "/obrazy2/4.jpeg",
    },
  ];

  // Fetch image dimensions using browser Image API
  useEffect(() => {
    const fetchDimensions = async () => {
      const dimensions = {};
      const baseUrl = window.location.origin;
      for (const image of images) {
        try {
          const img = new window.Image();
          img.src = `${baseUrl}${image}`;
          await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load ${image}`));
          });
          dimensions[image] = {
            width: img.naturalWidth,
            height: img.naturalHeight,
          };
        } catch (error) {
          console.error(`Error fetching dimensions for ${image}:`, error);
          dimensions[image] = { width: 1200, height: 800 };
        }
      }
      setImageDimensions(dimensions);
    };

    fetchDimensions();
  }, []);

  // Initialize PhotoSwipe
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `.${classes.slider}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    // Cleanup on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

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
        <Slider {...settings} className={classes.slider}>
          {images.map((image, index) => {
            const { width = 1200, height = 800 } = imageDimensions[image] || {};
            return (
              <a
                key={index}
                href={image}
                className="pswp-gallery__item"
                data-pswp-width={width}
                data-pswp-height={height}
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt={altTags[index]}
                  quality={100}
                />
              </a>
            );
          })}
        </Slider>
        <p className={classes.description}>
          *Kliknij w zdjęcie aby zobaczyć pełnoekranowy podgląd
        </p>
      </div>

      {/* more photos */}
      <div className={classes.container}>
        {exhibits.map((exhibit, idx) => (
          <div
            key={idx}
            className={`${classes.exhibit} ${
              idx % 2 === 0 ? classes.normal : classes.reversed
            }`}
          >
            <div className={classes.text}>
              <h3>{exhibit.title}</h3>
              <p>{exhibit.description}</p>
              <p>{exhibit.text}</p>
            </div>
            <div className={classes.imageContainer}>
              <Image
                src={exhibit.image}
                alt={exhibit.title}
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
