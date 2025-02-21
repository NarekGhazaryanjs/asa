import Footer from "../../ui/Footer/Footer";
import cards from "./data.js";

import styles from "./styles.module.css";
import teamPng from "../../assets/team.png";
import CourseCard from "../../components/CourseCard/CourseCard";
import CoursesSlider from "../../components/CoursesSlider/CoursesSlider.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";

function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <h1>Սովորի՛ր մեզ հետ</h1>
        <img src={teamPng} alt="" />
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoChildContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.subtitle}>Բոլոր դասընթացները</h1>
            <p>
              Բացահայտիր մեր պատմությունը և իմացիր թե ինչպե՞ս կարող ենք մենք
              օգնել քեզ առաջ խաղացնել քո բիզնեսը սոցիալական հարթակներում։
            </p>
          </div>
          <div className={styles.cards}>
            {cards.map((card, i) => {
              return (
                <CourseCard
                  title={card.title}
                  description={card.description}
                  width={card.width}
                  className={card.className}
                  index={i}
                  path={card.path}
                >
                  {card.children}
                </CourseCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.coursesContainer}>
        {/* <button>Դասընթացներ</button> */}
        <Subtitle color="#F6F6F6" textAlign="center">
          Առաջիկա մեկնարկվող դասընթացներ
        </Subtitle>
        <p>
          Պատրա՞ստ եք բարձրացնել ձեր հմտությունները և նոր ճանապարհ սկսել
          տեխնոլոգիական ոլորտում: Բաց մի՛ թողեք մեր դասընթացները, որոնք
          նախատեսված են օգնելու Ձեզ՝ հաջողության հասնել այսօրվա արագ փոփոխվող
          թվային աշխարհում:
        </p>
        <div className={styles.sliderContainer}>
          <CoursesSlider />
        </div>
      </div>
      <Footer background="#00000040" />
    </div>
  );
}

export default Education;
