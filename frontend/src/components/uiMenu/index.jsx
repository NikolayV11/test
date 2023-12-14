import React from "react";

import styles from "./UiMenu.module.scss";

export function UiMenu() {
  const [active, setActive] = React.useState(0);
  const ui_menu = [
    {
      listStatus: true,
      title: "Новости",
      class: `${styles.menu_list} ${styles.news}`,
      href: "#",
      btn: {
        class: styles.extra_label,
        block1: {
          class: styles.menu_wrap,
          img: {
            url: "/public/ico/narrow_column/ui_munu-menu.svg",
            alt: "menu",
          },
        },
        block2: {
          class: styles.right_icon,
          img: {
            url: "/public/ico/narrow_column/ui_menu-right_icon.svg",
            alt: "right_icon",
          },
        },
      },

      list: {
        class: styles.news_list,
        link1: { href: "#", class: `${styles.menu_list} ${styles.foto}`, title: "Фотографии" },
        link2: { href: "#", class: `${styles.menu_list} ${styles.friends}`, title: "Друзья" },
      },
      sep: "",
    },
    {
      title: "Рекомендации",
      class: `${styles.menu_list} ${styles.recommended}`,
      href: "#",
      sep: "",
    },
    {
      listStatus: false,
      title: "Поиск",
      class: `${styles.menu_list} ${styles.search}`,
      href: "#",
      sep: styles.sep,
    },
    { listStatus: false, title: "Реакции", class: `${styles.menu_list}`, href: "#", sep: "" },
    { listStatus: false, title: "Обновления", class: `${styles.menu_list}`, href: "#", sep: "" },
    { listStatus: false, title: "Комментарии", class: `${styles.menu_list}`, href: "#", sep: "" },
  ];
  return (
    <div className={`${styles.ui_menu} boxBorder`}>
      {ui_menu.map((item, index) => {
        return (
          <>
            <a
              key={index}
              onClick={() => {
                setActive(index);
              }}
              href={item.href}
              className={active === index ? `${item.class} ${styles.active}` : item.class}>
              {item.title}
              {item.btn ? (
                <div className={item.btn.class}>
                  <div className={`${item.btn.block1.class}`}>
                    <img src={item.btn.block1.img.url} alt={item.btn.block1.img.alt} />
                  </div>
                  <div className={item.btn.block2.class}>
                    <img src={item.btn.block2.img.url} alt={item.btn.block2.img.alt} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </a>
            {item.listStatus === true && (active === 1.1 || active === 1.2 || active === 0) ? (
              <div key={item.title} className={item.list.class}>
                <a
                  href={item.list.link1.href}
                  onClick={() => {
                    setActive(1.1);
                  }}
                  className={
                    active === 1.1
                      ? `${item.list.link1.class} ${styles.active}`
                      : item.list.link1.class
                  }>
                  {item.list.link1.title}
                </a>
                <a
                  onClick={() => {
                    setActive(1.2);
                  }}
                  href={item.list.link2.href}
                  className={
                    active === 1.2
                      ? `${item.list.link2.class} ${styles.active}`
                      : item.list.link2.class
                  }>
                  {item.list.link2.title}
                </a>
              </div>
            ) : (
              ""
            )}
            {item.sep ? <div className={`sep ${item.sep}`}></div> : ""}
          </>
        );
      })}
    </div>
  );
}
