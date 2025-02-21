import styles from "./BlackComponentStyle.module.css";
import backroundImage from "../../assets/blackBackgroundImage.png";
import "./BlackComponentStyle.module.css";
import Particle from "../../components/Particle/Particle";
import useWindowSize from "../../helpers/UseWindowSize";
import { useRef } from "react";
function BlackComponent() {
  const elementRef = useRef();
  const windowWidth = useWindowSize();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('${backroundImage}')` }}
    >
      <h1>Մեր աշխատանքի ոճը</h1>
      <div className={styles.particles} ref={elementRef}>
        <div className={styles.row}>
          <Particle
            top={windowWidth <= 720 ? 345 : 440}
            rotation={windowWidth <= 720 ? 0 : 4.53}
            landingRotation={windowWidth <= 720 ? -20 : 0}
            transitionDuration={300}
            elementRef={elementRef}
          >
            Հասանելիություն
          </Particle>

          <Particle
            rotation={-7.28}
            landingRotation={windowWidth <= 720 ? 0 : -26}
            top={windowWidth <= 720 ? 300 : 265}
            transitionDuration={windowWidth <= 720 ? 200 : 400}
            elementRef={elementRef}
          >
            Ժամանակի ճիշտ կառավարում
          </Particle>
          <Particle
            top={350}
            transitionDuration={350}
            elementRef={elementRef}
            landingRotation={4.5}
          >
            Offline
          </Particle>
        </div>
        <div className={styles.row}>
          <Particle top={355} rotation={-13.38} elementRef={elementRef}>
            Online
          </Particle>
          <Particle top={175} hasRadius={false} elementRef={elementRef}>
            Պրոֆեսիոնալ մոտեցում
          </Particle>
          <Particle
            top={windowWidth <= 720 ? 215 : 230}
            hasRadius={false}
            rotation={8.51}
            landingRotation={windowWidth <= 720 ? 0 : 10.5}
            elementRef={elementRef}
          >
            Կազմակերպվածություն
          </Particle>
          <Particle
            top={windowWidth <= 720 ? 425 : 295}
            rotation={windowWidth <= 720 ? 7.27 : -11.9}
            landingRotation={windowWidth <= 720 ? 14 : 0}
            elementRef={elementRef}
          >
            Որակ
          </Particle>
        </div>
      </div>
    </div>
  );
}
export default BlackComponent;
