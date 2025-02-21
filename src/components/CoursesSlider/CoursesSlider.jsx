import Carousel from "react-multi-carousel";
import CoursesSliderCard from "../CourseSliderCard/CourseSliderCard.jsx";
import sliderCards from "./data.js";

import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";

function CoursesSlider() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: true,
    showDots: false,
    arrows: false,
    containerClass: styles.slider,
    itemClass: styles.item,
    autoPlaySpeed: 20,
    customTransition: "all 2000ms linear",
    transitionDuration: 2000,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    },
  };

  const sliderCardComponents = sliderCards.map((sliderCard, index) => {
    return <CoursesSliderCard {...sliderCard} key={index} />;
  });

  return (
    <div className={styles.container}>
      <Carousel {...settings}>{sliderCardComponents}</Carousel>
    </div>
  );
}

export default CoursesSlider;
