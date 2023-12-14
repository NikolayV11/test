import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.page_header}>
      <div className={`content ${styles.content} `}>
        <ul className={`${styles.header__navig}`}>
          <li className={`${styles.HeaderItems} ${styles.HeaderLogo}`}>
            <Link>
              <button className={styles.btn}>
                <img className={styles.imgSVG} src="/public/ico/vkLogo.svg" alt="logo" />
              </button>
            </Link>
          </li>
          <li>
            <label
              name="inputSearchHeader"
              className={`${styles.HeaderItems} ${styles.HeaderSearch}`}>
              <img className={styles.imgSVG} src="/public/ico/headerNav/search.svg" alt="search" />
              <input name="inputSearchHeader" type="text" placeholder="Поиск" value="" />
            </label>
          </li>
          <li className={`${styles.HeaderItems} ${styles.HeaderNotifications}`}>
            <button className={styles.btn}>
              <img
                className={styles.imgSVG}
                src="/public/ico/headerNav/notifications.svg"
                alt="search"
              />
            </button>
          </li>
          <li className={`${styles.HeaderItems} ${styles.HeaderAudio}`}>
            <button className={styles.btn}>
              <img
                className={styles.imgSVG}
                className={styles.imgSVG}
                src="/public/ico/headerNav/music.svg"
                alt=""
              />
            </button>
          </li>
          <li className={`${styles.HeaderItems} ${styles.HeaderProf}`}>
            <button className={`${styles.btn} ${styles.HeaderMunu}`}>
              <img className={styles.imgSVG} src="/public/ico/headerNav/menuProf.svg" alt="" />
            </button>
            <button className={styles.btn}>
              <img className={styles.imgUser} src="/public/ico/headerNav/foto.jpg" alt="" />
              <img
                className={`${styles.profileArrow} ${styles.imgSVG}`}
                src="/public/ico/headerNav/navProf.svg"
                alt=""
              />
            </button>
            <div className={styles.top_profile_menu}></div>
          </li>
        </ul>
      </div>
    </header>
  );
}
