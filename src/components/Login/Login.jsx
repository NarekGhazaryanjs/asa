import LoginSignUpCard from "../LoginSignUpCard/LoginSignUpCard";

function Login({ setShowRegister }) {
  return (
    <LoginSignUpCard
      setShow={() => (setShowRegister(true))}
      placeholder={"Մուտքագրել էլ․ հասցեն"}
      placeholder2={"Մուտքագրել գաղտնաբառը"}
      blackText={"Մուտք գործել"}
      blueText={"Գրանցվել"}
    />
  );
}

export default Login;
