"use client";

import React, { FC, PropsWithChildren, } from "react";
import styles from "./Carousel.module.scss";
import Slider from "react-slick";
import { CustomArrowLeft } from "./CustomArrowLeft";
import { CustomArrowRiht } from "./CustomArrowRiht";

type CarouselTypes = {
  controllers?: boolean;
  auto?: boolean;
  autoplaySpeed?: number
};

export const Carousel: FC<PropsWithChildren<CarouselTypes>> = ({ children, controllers, auto, autoplaySpeed }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: auto,
    autoplaySpeed: autoplaySpeed ||5000,
    pauseOnHover: true,
    nextArrow: controllers ? <CustomArrowLeft /> : <></> ,
    prevArrow: controllers ?  <CustomArrowRiht /> : <></>,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <div className={styles.main_container}>
      <Slider className={styles.slider} {...settings}>
        {children}
      </Slider>
    </div>


    // {controllers && <div className={styles.slider}>


    // </div>}

  );
};

