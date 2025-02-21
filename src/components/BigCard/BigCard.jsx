import styles from "./BigCard.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import circles from "../../assets/circles.svg";
import star from "../../assets/star.svg";
import curvedCircle from "../../assets/curvedCircle.svg";
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard.jsx";

function BigCard() {
  return (
    <ScrollAnimation
      animateIn="zoomIn"
      animateOut="fadeOut"
      className={styles.cardContainer}
    >
      <div className={styles.blackBackground}></div>
      <div className={styles.bigCard}>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
          <h1 className={styles.title}>Դու կստանաս</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOut"
          className={styles.description}
        >
          լավագույն ուսանողներն ունեն մի շարք առավելություններ լավագույն
          ուսանողներն ունեն մի շարք առավելություններլավագույն ուսանողներն ունեն
          մի շարք առավելություններլավագույն ուսանողներն ունեն մի շարք
          առավելություններ
        </ScrollAnimation>
        <div className={styles.cards}>
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
            <AdvantageCard
              svg={circles}
              title={"Կրթություն"}
              description={
                "լավագույն ուսանողներն ունեն մի շարք առավելություններ"
              }
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
            <AdvantageCard
              svg={star}
              title={"Պրակտիկա"}
              description={
                "լավագույն ուսանողներն ունեն մի շարք առավելություններ"
              }
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
            <AdvantageCard
              svg={curvedCircle}
              title={"Աշխատանք"}
              description={
                "լավագույն ուսանողներն ունեն մի շարք առավելություններ"
              }
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
          <button>Ծանոթանալ դասընթացներին</button>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
}

export default BigCard;
