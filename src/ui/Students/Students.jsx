import { useRef } from "react";
import Carousel from "react-multi-carousel";
import Subtitle from "../../components/Subtitle/Subtitle";
import images from "./data.js";

import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";
import leftSvg from "../../assets/blackArrowLeft.svg";
import rightSvg from "../../assets/blackArrowRight.svg";

function Students() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: false,
    showDots: false,
    arrows: false,
    containerClass: styles.slider,
    itemClass: styles.item,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        autoPlay: true,
        draggable: true,
      },
      mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
      },
    },
  };
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.previous();
  };
  const scrollRight = () => {
    sliderRef.current.next();
  };
  return (
    <div className={styles.container}>
      <Subtitle textAlign="center">Դասընթացն ավարտած ուսանողները</Subtitle>
      <div className={styles.sliderContainer}>
        <div className={styles.dot} onClick={scrollLeft}>
          <img src={leftSvg} alt="" />
        </div>
        <Carousel {...settings} ref={sliderRef}>
          {images.map((image, index) => {
            return (
              <img src={image} alt="" className={styles.image} key={index} />
            );
          })}
        </Carousel>
        <div className={styles.dot} onClick={scrollRight}>
          <img src={rightSvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Students;
