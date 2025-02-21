import styles from "./styles.module.css";

function LoginSignUpCard({
  setShow,
  placeholder,
  placeholder2,
  blackText,
  blueText,
}) {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <label>էլ․ հասցե</label>
        <input type="email" placeholder={placeholder} required />
        <label>Գաղտնաբառ</label>
        <input type="password" placeholder={placeholder2} required />
        <button className={styles.loginButton}>{blackText}</button>
        <a href="#">Մուտք գործել Google account-ով</a>
        <button className={styles.singInButton} onClick={setShow}>
          {blueText}
        </button>
      </form>
    </div>
  );
}
export default LoginSignUpCard;
