import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function CourseCard({
  title,
  description,
  children,
  width,
  className,
  index,
  path,
}) {
  return (
    <div
      className={`${styles.container} ${styles[className]}`}
      style={{ width: width }}
      key={index}
    >
      <div className={styles.childContainer}>
        <div className={styles.textCont}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={`/courses/${path}`}>Իմանալ ավելին</Link>
        </div>
        {children}
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
export default CourseCard;
