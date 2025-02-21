import styles from "./styles.module.css";
import checkBox from "../../assets/checkBox.svg";

function Confirmed() {
  return (
    <div className={styles.container}>
      <div className={styles.checkBoxContainer}>
        <h2>Ձեր գրանցումը հաստատվեց</h2>
        <img className={styles.checkBox} src={checkBox} alt="" />
        <div className={styles.checkBoxTextContainer}>
          <p className={styles.checkBoxTitle}>
            Բաց դասը տեղի կունենա դեկտեմբերի 3-ին (19:30)
          </p>
          <p className={styles.checkBoxTitle2}>Հասցե՝ Կոմիտաս Վ․Վաղարշյան 21</p>
        </div>
      </div>
    </div>
  );
}

export default Confirmed;
