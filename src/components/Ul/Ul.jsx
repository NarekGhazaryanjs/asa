import styles from "./styles.module.css";

function Ul({ list }) {
  return (
    <ul className={styles.ul}>
      {list.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
}

export default Ul;
