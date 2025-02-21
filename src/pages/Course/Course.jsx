import data from "./data.js";
import CoursesSlider from "../../components/CoursesSlider/CoursesSlider.jsx";
import LearningPlan from "../../ui/LearningPlan/LearningPlan.jsx";
import LearningOutcome from "../../ui/LearningOutcome/LearningOutcome.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import Date from "../../components/Date/Date.jsx";
import Footer from "../../ui/Footer/Footer.jsx";
import { Link } from "react-router-dom";

import calendar1 from "../../assets/calendar1.svg";
import calendar2 from "../../assets/calendar2.svg";
import calendar3 from "../../assets/calendar3.svg";
import styles from "./styles.module.css";
import Students from "../../ui/Students/Students.jsx";

function Course({ page }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.courseInfoCard}
        style={{ backgroundImage: `url(${data[page].background})` }}
      >
        <h1>{data[page].title}</h1>
        <p>{data[page].date}</p>
        <Link to="/courseRegistration">Գրանցվել անվճար բաց դասին</Link>
      </div>

      <div className={styles.dates}>
        <div>
          <Date
            svg={calendar1}
            title={data[page].lastsMonths[0]}
            description={data[page].lastsMonths[1]}
          />
          <Date
            svg={calendar2}
            title={data[page].lastsDays}
            description="շաբաթական"
          />
          <Date
            svg={calendar3}
            title={data[page].lastsHours}
            description="դասաժամ"
          />
        </div>
      </div>
      <div className={styles.learningContainer}>
        <LearningPlan
          description={data[page].learningDescription}
          topics={data[page].learningTopics}
          advantages={data[page].learningAdvantages}
        />
      </div>
      <div className={styles.learningOutcome}>
        <LearningOutcome cards={data[page].learningOutcome} />
      </div>
      <div className={styles.registerInfoCard}>
        <div
          className={`${styles.courseInfoCard} ${styles.courseInfoCard2}`}
          style={{ backgroundImage: `url(${data[page].background2})` }}
        >
          <h1>Դասընթացի արժեքն ամսական</h1>
          <h1>{data[page].price}</h1>
          <p>{data[page].date}</p>
          <Link to="/courseRegistration">Գրանցվել անվճար բաց դասին</Link>
        </div>
      </div>
      <div className={styles.students}>
        <Students />
      </div>
      <div className={styles.coursesSliderContainer}>
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

export default Course;
