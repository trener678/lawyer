import styles from "./Rate.module.css";
import { Link } from "react-router-dom";
import TopItem from "../components/TopItem";

import Btn from "../components/Btn";
import AdvantagesItem from "../components/AdvantagesItem";
import Decision from "../components/Decision";
import Interaction from "../components/Interaction";

import download from "../images/download.svg";
import maps from "../images/maps.svg";
import top_1 from "../images/main-top_1.svg";
import top_2 from "../images/main-top_2.svg";
import top_3 from "../images/main-top_3.svg";
import top_4 from "../images/main-top_4.svg";
import advantages_1 from "../images/advantages_1.svg";
import advantages_2 from "../images/advantages_2.svg";
import advantages_3 from "../images/advantages_3.svg";
import advantages_4 from "../images/advantages_4.svg";
import comp from "../images/comp.png";
import interaction_1 from "../images/Interaction-1.svg";
import interaction_2 from "../images/Interaction-2.svg";
import interaction_3 from "../images/Interaction-3.svg";
import interaction_4 from "../images/Interaction-4.svg";

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
      <div className={styles.advantages}>
        <div className="container">
          <h2 className={styles.advantages__title}>Наши преимущества</h2>
          <div className={styles.advantages__list}>
            <AdvantagesItem
              img={advantages_1}
              text="До 1 000 000 запросов в день"
              link="#"
              text__link="Одиночные и пакетные запросы"
            />
            <AdvantagesItem
              img={advantages_2}
              text="Всегда только актуальные данные"
              link="#"
              text__link="Откуда мы берем информацию"
            />
            <AdvantagesItem
              img={advantages_3}
              text="Высокая точность
              определения — 99,6%"
              link="#"
              text__link="Как мы гарантируем точность"
            />
            <AdvantagesItem
              img={advantages_4}
              text="Функциональный личный кабинет"
              link="#"
              text__link="Попробуйте бесплатно"
            />
          </div>
        </div>
      </div>
      <div className={styles.decisions}>
        <div className="container">
          <div className={styles.decisions__inner}>
            <div className={styles.decisions__info}>
              <h2 className={styles.decisions__title}>
                Идеальное решение для:
              </h2>
              <div className={styles.decisions__list}>
                <Decision text="Банков и кредитных организаций" />
                <Decision text="Микрофинансовых организаций" />
                <Decision text="Коллекторских агенств" />
                <Decision text="ЖКХ" />
                <Decision text="Лизинговых компаний" />
                <Decision text="Страховых компаний" />
                <Decision text="Юридических фирм" />
                <Decision text="Маркетинговых агентств" />
              </div>
            </div>
            <img src={comp} alt="" className={styles.decisions__img} />
          </div>
        </div>
      </div>
      <div className={styles.interaction}>
        <div className="container">
          <div className={styles.interaction__inner}>
            <h2 className={styles.interaction__title}>
              Удобный формат взаимодействия
            </h2>
            <div className={styles.interaction__list}>
              <Interaction
                img={interaction_1}
                text="Одиночные запросы через личный кабинет"
              />
              <Interaction
                img={interaction_2}
                text="Пакетные запросы с помощью excel таблиц"
              />
              <Interaction
                img={interaction_3}
                text="Взаимодействие через менеджера"
              />
              <Interaction
                img={interaction_4}
                text="Автоматизированная работа через API"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
