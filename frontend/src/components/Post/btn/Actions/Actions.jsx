import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./Actions.module.scss";

export function Actions() {
  const menu = [
    { title: "Уведомлять о записях", url: "#" },
    { title: "Сохранить в закладках", url: "#" },
    { title: "Пожаловаться", url: "#" },
    { title: "Это не итересно", url: "#" },
  ];
  return (
    <div className={`${styles.post_btn} ${styles.actions}`}>
      <HandySvg
        className={`img_SVG_color post_header_btn ${styles.SVG}`}
        src="/public/ico/post_btn/actions_btn.svg"
      />
      <div className={`${styles.actions_menu}`}>
        {menu.map((item, index) => {
          return (
            <a className={styles.menu_link} key={item.title} href={item.url}>
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
