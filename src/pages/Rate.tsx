import styles from "./Rate.module.css";
import { Link } from "react-router-dom";
import TopItem from "../components/TopItem";

import Btn from "../components/Btn";

import download from "../images/download.svg";
import maps from "../images/maps.svg";
import top_1 from "../images/main-top_1.svg";
import top_2 from "../images/main-top_2.svg";
import top_3 from "../images/main-top_3.svg";
import top_4 from "../images/main-top_4.svg";

export default function Rate() {
  return (
    <main className="main">
      <div className={styles.main__top}>
        <div className="container">
          <div className={styles.top__container}>
            <div className={styles.main__top__info}>
              <Link to={"#"} className={styles.exampleLink}>
                <div className={styles.example}>
                  <div className={styles.example__inner}>
                    <img
                      src={download}
                      alt="скачать"
                      className={styles.example__img}
                    />
                    <p className={styles.example__text}>Пример результата</p>
                  </div>
                </div>
              </Link>
              <p className={styles.main__top__info__top}>
                <span>Онлайн-сервисы </span>для судебной работы
              </p>
              <h1 className={styles.title}>
                Определение территориальной подсудности{" "}
                <span>с судами, работающими с ЭДО</span>
              </h1>
              <p className={styles.main__top__info__text}>
                Автоматическое определение подсудности и реквизитов для оплаты
                госпошлины за несколько секунд
              </p>
              <Btn text="Получить демо доступ" padding="20px 30px" link="#" />
            </div>
            <div className="main__top__map">
              <img src={maps} alt="карты" className="maps" />
            </div>
          </div>
          <div className={styles.main__top__list}>
            <TopItem img={top_1} text="Данные о судебных участках" />
            <TopItem img={top_2} text="Данные отдела судебных приставов" />
            <TopItem img={top_3} text="Реквизиты для оплаты госпошлины" />
            <TopItem img={top_4} text="Суды, принимающие ЭДО" />
          </div>
        </div>
      </div>
    </main>
  );
}
