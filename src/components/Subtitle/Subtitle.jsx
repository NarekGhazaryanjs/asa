import styles from "./styles.module.css";

function Subtitle({ children, textAlign, color }) {
  return (
    <h1 className={styles.subtitle} style={{ textAlign, color }}>
      {children}
    </h1>
  );
}

export default Subtitle;
