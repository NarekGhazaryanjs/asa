import { Link } from "react-router-dom";
import { useState } from "react";
import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";
import CoursesSlider from "../../components/CoursesSlider/CoursesSlider.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import Footer from "../../ui/Footer/Footer.jsx";
import Students from "../../ui/Students/Students.jsx";
import LearningOutcome from "../../ui/LearningOutcome/LearningOutcome.jsx";

import coursePaths from "./data.js";
import data from "../../pages/Course/data.js";

import iconRight from "../../assets/iconRight.svg";
import imagePng from "../../assets/frontendImage.png";
import blackArrow from "../../assets/blackArrow.svg";
import styles from "./styles.module.css";

function Courses({ page }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const triggerDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  const coursePathLinks = coursePaths.map((coursePath, i) => {
    return (
      <Link
        key={i}
        to={`../courses/${coursePath.path}`}
        className={coursePath.path === data[page].path ? styles.openLink : ""}
      >
        {coursePath.name}
        <img src={iconRight} alt="" />
      </Link>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.mobileNav}>
        <div className={styles.mobileSelectedPage} onClick={triggerDropdown}>
          <h1>{data[page].title}</h1>
          <img
            src={blackArrow}
            alt=""
            className={isOpenDropdown ? styles.open : ""}
          />
        </div>
        {isOpenDropdown ? (
          <div className={styles.mobilePaths}>
            <div>{coursePathLinks}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={styles.mobileImage}
        style={{ backgroundImage: `url(${data[page].background})` }}
      >
        <h1>{data[page].title}</h1>
      </div>
      <div className={styles.coursePart}>
        <div className={styles.nav}>
          <h1>Բոլոր դասընթացները</h1>
          <div className={styles.paths}>{coursePathLinks}</div>
        </div>
        <div className={styles.main}>
          <div>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${imagePng})` }}
            ></div>
            <div className={styles.learningPlanContainer}>
              <LearningPlan
                description={data[page].learningDescription}
                topics={data[page].learningTopics}
                advantages={data[page].learningAdvantages}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.learningOutcome}>
        <LearningOutcome cards={data[page].learningOutcome} />
      </div>
      <div className={styles.studentsContainer}>
        <Students />
      </div>
      <div className={styles.sliderContainer}>
        <Subtitle textAlign="center">Առաջիկա մեկնարկվող դասընթացներ</Subtitle>
        <p>
          Պատրա՞ստ եք բարձրացնել ձեր հմտությունները և նոր ճանապարհ սկսել
          տեխնոլոգիական ոլորտում: Բաց մի՛ թողեք մեր դասընթացները, որոնք
          նախատեսված են օգնելու Ձեզ՝ հաջողության հասնել այսօրվա արագ փոփոխվող
          թվային աշխարհում:
        </p>
        <CoursesSlider />
      </div>
      <div className={styles.footer}>
        <Footer background="#000" />
      </div>
    </div>
  );
}

export default Courses;
