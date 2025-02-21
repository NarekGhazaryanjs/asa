import application from "../../assets/aplication.svg";
import button from "../../assets/button.svg";
import rectangle from "../../assets/rectagle.svg";
import Ai from "../../assets/Ai.svg";
import Ps from "../../assets/Ps.svg";
import icons from "../../assets/icons.svg";
import HTML from "../../assets/HTML.svg";
import JS from "../../assets/JS.svg";
import CSS from "../../assets/CSS.svg";
import Icon from "../../assets/Icon.svg";
import onlineFullStack from "../../assets/onlineFullStack.svg";
import Spread from "../../assets/Spread.svg";
import PythonBlue from "../../assets/PythonBlue.svg";
import PythonGray from "../../assets/PythonGray.svg";
import Cat from "../../assets/Cat.svg";
import n2gInstagram from "../../assets/n2gInstagram.svg";
import ecowoodhouse8 from "../../assets/ecowoodhouse8.svg";
import cardStyles from "../../components/CourseCard/styles.module.css";

const cards = [
  {
    title: "Ui/Ux design",
    path: "uiux",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
    width: "59%",
    className: "uiux",
    children: (
      <div className={cardStyles.uiuxCont}>
        <img className={cardStyles.infoImg} src={application} alt="" />
        <img className={cardStyles.infoImg2} src={button} alt="" />
        <img className={cardStyles.infoImg3} src={rectangle} alt="" />
      </div>
    ),
  },
  {
    title: "Front-End",
    path: "front-end",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
    width: "39%",
    className: "frontEnd",
    children: (
      <div className={cardStyles.frontEndCont}>
        <img className={cardStyles.frontEndImg} src={Ps} alt="" />
        <img className={cardStyles.frontEndImg2} src={Ai} alt="" />
        <img className={cardStyles.frontEndImg3} src={icons} alt="" />
      </div>
    ),
  },
  {
    title: "Front-End",
    path: "front-end2",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a ",
    width: "39%",
    className: "frontEnd2",
    children: (
      <div className={cardStyles.frontEndCont2}>
        <img className={cardStyles.frontEnd2Img} src={HTML} alt="" />
        <img className={cardStyles.frontEnd2Img2} src={JS} alt="" />
        <img className={cardStyles.frontEnd2Img3} src={CSS} alt="" />
      </div>
    ),
  },
  {
    title: "FullStack ծրագրավորումs",
    path: "fullstack",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
    width: "59%",
    className: "fullStack",
    children: (
      <div className={cardStyles.fullStackCont}>
        <img className={cardStyles.fullStackImg} src={Icon} alt="" />
        <img
          className={cardStyles.fullStackImg2}
          src={onlineFullStack}
          alt=""
        />
        <img className={cardStyles.fullStackImg3} src={Spread} alt="" />
      </div>
    ),
  },
  {
    title: "Python ծրագրավորում",
    path: "python",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
    width: "59%",
    className: "python",
    children: (
      <div className={cardStyles.pythonCont}>
        <img
          className={cardStyles.pythonImg}
          src={PythonBlue}
          alt="pythonImg"
        />
        <img className={cardStyles.pythonImg2} src={PythonGray} alt="" />
      </div>
    ),
  },
  {
    title: "Scratch",
    path: "scratch",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
    width: "39%",
    className: "scratch",
    children: (
      <div className={cardStyles.scratchCont}>
        <img className={cardStyles.scratchImg} src={Cat} alt="scratchImg" />
      </div>
    ),
  },
  {
    title: "SMM դասընթաց",
    path: "smm",
    description:
      "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
    width: "59%",
    className: "smm",
    children: (
      <div className={cardStyles.smmCont}>
        <img className={cardStyles.smmImg} src={n2gInstagram} alt="smmImg" />
        <img className={cardStyles.smmImg2} src={ecowoodhouse8} alt="smmImg2" />
      </div>
    ),
  },
];

export default cards;
