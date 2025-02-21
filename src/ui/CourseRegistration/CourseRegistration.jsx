import Confirmed from "./Confirmed";
import styles from "./styles.module.css";
import React, { useState } from "react";

function CourseRegistration() {
  const [valid, setValid] = useState(true);

  return (
    <div className={styles.container}>
      <h2>Գրանցում անվճար բաց դասին</h2>
      <p>լրացրեք դաշտերը</p>
      <form className={styles.register}>
        <input
          placeholder="Անուն, Ազգանուն"
          type="text"
          className={!valid ? styles.invalid : ""}
        />
        <input
          placeholder="Էլ․ Հասցե"
          type="email"
          className={!valid ? styles.invalid : ""}
        />
        <input
          placeholder="Հեռախոսահամար"
          type="number"
          className={!valid ? styles.invalid : ""}
        />
        <button>Գրանցվել անվճար դասին</button>
      </form>
    </div>
    // <Confirmed></Confirmed>
  );
}
export default CourseRegistration;
