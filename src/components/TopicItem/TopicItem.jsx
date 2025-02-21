import Ul from "../Ul/Ul";

import arrowDown from "../../assets/topicArrowDown.svg";
import arrowUp from "../../assets/topicArrowUp.svg";
import styles from "./styles.module.css";
import { useState } from "react";

function TopicItem({ title, descriptions, uls, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={styles.item} onClick={toggle}>
        <div>
          <div className={styles.dot}></div>
          <h1>{title}</h1>
        </div>
        <img src={open ? arrowDown : arrowUp} alt="" width="23px" />
      </div>
      {!open ? <div className={styles.border}></div> : ""}
      {open ? (
        <div className={styles.dropdown}>
          <div>
            {descriptions.map((description, index) => {
              return (
                <p className={styles.description} key={index}>
                  {description}
                </p>
              );
            })}
          </div>
          <div>
            {uls.map((ul, index) => {
              return (
                <div className={styles.list} key={index}>
                  <h1>{ul.title}</h1>
                  <div className={styles.ul}>
                    <Ul list={ul.list} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TopicItem;
