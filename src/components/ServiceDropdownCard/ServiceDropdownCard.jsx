import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import icon1 from "../../assets/education.svg";
import icon2 from "../../assets/marketing.svg";
import icon3 from "../../assets/compIcon.svg";

function ServiceDropdownCard({ onClick }) {
  const pages = [
    {
      image: icon1,
      title: "Կրթություն",
      to: "/education",
    },
    {
      image: icon2,
      title: "SMM ծառայություն",
      to: "/smm",
    },
    {
      image: icon3,
      title: "WEB կայքերի պատրաստում",
      to: "/webDeveloping",
    },
  ];
  return (
    <div className={styles.container}>
      {pages.map((page, index) => {
        return (
          <Link key={index} to={page.to} onClick={onClick}>
            <div>
              <img src={page.image} alt="" />
            </div>
            <p>{page.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceDropdownCard;
