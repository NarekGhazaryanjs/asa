import CheckCard from "../../components/CheckCard/CheckCard";
import Subtitle from "../../components/Subtitle/Subtitle";
import styles from "./styles.module.css";

function LearningOutcome({ cards }) {
  return (
    <div className={styles.container}>
      <Subtitle>Սովորելու արդյունքում</Subtitle>
      <div className={styles.check}>
        {cards.map((el, index) => {
          return <CheckCard title={el} key={index} />;
        })}
      </div>
    </div>
  );
}
export default LearningOutcome;
