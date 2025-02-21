import LoginSignUpCard from "../LoginSignUpCard/LoginSignUpCard";

function Register({ setShowLogin, setShowRegister }) {
  return (
    <LoginSignUpCard
      setShow={() => {
        setShowLogin(true);
        setShowRegister(false);
      }}
      placeholder={"value"}
      placeholder2="Մուտքագրել գաղտնաբառը"
      blackText={"Գրանցվել"}
      blueText={"Մուտք գործել"}
    />
  );
}

export default Register;
