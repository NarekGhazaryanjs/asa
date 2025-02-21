import styles from "./styles.module.css";

function Date({ title, description, svg }) {
  return (
    <div className={styles.container}>
      <img src={svg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Date;
