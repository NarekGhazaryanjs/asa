import styles from "./Particle.module.css";
import UseIsInViewport from "../../helpers/UseIsInViewport.js";
import { useRef } from "react";

function Particle({
  children,
  hasRadius = true,
  rotation = 0,
  landingRotation = 0,
  top,
  transitionDuration = 200,
  elementRef,
}) {
  const particleRef = useRef();
  const isInViewport = UseIsInViewport(elementRef);
  const getFallingStyles = (isFallingInViewPort) => ({
    transition: `all ${transitionDuration}ms ease-in`,
    marginTop: isFallingInViewPort ? top + "px" : "0",
    transform: isFallingInViewPort
      ? `rotateZ(${landingRotation}deg)`
      : `rotateZ(${rotation}deg)`,
  });

  return (
    <div
      className={`${styles.particle} ${hasRadius ? styles.roundParticle : ""}`}
      style={getFallingStyles(isInViewport)}
      ref={particleRef}
    >
      {children}
    </div>
  );
}

export default Particle;
