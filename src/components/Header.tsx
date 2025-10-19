import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "../images/logo.svg";
import Btn from "./Btn";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.header__inner}>
          <Link to={"#"} className="logo__link">
            <img src={logo} alt="" className="logo__img" />
          </Link>
          <nav className="menu">
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <NavLink to={"/service"} className="menu__link">
                  О сервисе
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to={"/"} className="menu__link">
                  Тарифы
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to={"/instruction"} className="menu__link">
                  Инструкция
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to={"/stages"} className="menu__link">
                  Этапы работ
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to={"/guarantees"} className={styles.menu__link}>
                  Гарантии
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.header__info}>
            <div className={styles.header__contacts}>
              <a href="tel:+74956460043" className={styles.phone}>
                +7 (495) 646-00-43
              </a>
              <a href="mailto:info@youristo.online" className={styles.mail}>
                info@youristo.online
              </a>
            </div>
            <Btn
              text="Попробовать бесплатно"
              padding="15px 20px"
              radius="10px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
