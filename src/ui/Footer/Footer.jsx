import { Link } from "react-router-dom";
import style from "./styles.module.css";
import mailIcon from "../../assets/mailIcon.svg";
import mapSvg from "../../assets/map.svg";
import phone from "../../assets/phoneIcon.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer({ background }) {
  return (
    <div className={style.container} style={{ background }}>
      <div className={style.information}>
        <h2>Տեղեկություն</h2>
        <Link to="">Դասընթացներ</Link>
        <Link to="">SMM ծառայություն</Link>
        <Link to="">WEB կայքերի պատրաստում</Link>
        <Link to="">Նվեր քարտ</Link>
      </div>
      <div className={style.contacts}>
        <h2>Կոնտակտներ</h2>
        <a href="tel:+37496691949" target="_blank">
          <img src={phone} alt="" /> (096) 694919
        </a>
        <a href="mailto:n2gbrains@gmail.com" target="_blank">
          <img src={mailIcon} alt="" /> n2gbrains@gmail.com
        </a>
        <a href="https://maps.app.goo.gl/9sXkCXESax4VMMf97" target="_blank">
          <img className={style.cartaSvg} src={mapSvg} alt="" />
          Կոմիտաս Վ․Վաղարշյան 21
        </a>
      </div>
      <div className={style.socInfo}>
        <h2>Սոց․ մեդիա</h2>
        <div className={style.socialContactsContainer}>
          <a href="https://www.instagram.com/n2gbrains" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.facebook.com/N2GBrains/" target="_blank">
            <img className={style.facebookImg} src={facebook} alt="" />
          </a>
          <a href="#" target="_blank">
            <img className={style.linkedin} src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
