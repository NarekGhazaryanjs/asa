import TopicItem from "../../components/TopicItem/TopicItem";
import Ul from "../../components/Ul/Ul";
import styles from "./styles.module.css";
function LearningPlan({ description, topics, advantages }) {
  const topicsItems = topics.map((topic, index) => {
    return (
      <TopicItem
        title={topic.title}
        descriptions={topic.descriptions}
        uls={topic.uls}
        defaultOpen={topic.open}
        key={index}
      />
    );
  });
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Դասի ընդհանուր նկարագրություն</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <h1 className={styles.title}>Թեմաներ</h1>
      {topicsItems}
      <h1 className={styles.title}>Առավելություններ</h1>
      <Ul list={advantages} />
    </div>
  );
}

export default LearningPlan;
