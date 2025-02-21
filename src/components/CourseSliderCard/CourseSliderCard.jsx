import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function CourseSliderCard({ title, description, image, mode, date, path }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.topSide}>
        <button className={styles.date}>{date}</button>
        <button className={styles.mode}>{mode}</button>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={path}>Իմանալ ավելին →</Link>
      </div>
    </div>
  );
}
export default CourseSliderCard;
