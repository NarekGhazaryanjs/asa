import styles from "./styles.module.css";
import check from "../../assets/check.svg";

function CheckCard({ title }) {
  return (
    <div className={styles.container}>
      <img width="100%" src={check} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default CheckCard;
