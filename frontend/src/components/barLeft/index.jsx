import styles from "./LeftBar.module.scss";
export function LeftBar() {
  const userLink = [
    { ico: "/public/ico/leftBar/ico/user.svg", title: "Моя страница", news: "" },
    { ico: "/public/ico/leftBar/ico/news.svg", title: "Новости", news: "" },
    { ico: "/public/ico/leftBar/ico/mess.svg", title: "Мессенджер", news: "" },
    { ico: "/public/ico/leftBar/ico/calls.svg", title: "Звонки", news: "" },
    { ico: "/public/ico/leftBar/ico/friends.svg", title: "Друзья", news: "" },
    { ico: "/public/ico/leftBar/ico/communities.svg", title: "Сообщества", news: "" },
    { ico: "/public/ico/leftBar/ico/foto.svg", title: "Фотографии", news: "" },
    { ico: "/public/ico/leftBar/ico/music.svg", title: "Музыка", news: "" },
    { ico: "/public/ico/leftBar/ico/video.svg", title: "Видео", news: "" },
    { ico: "/public/ico/leftBar/ico/clipe.svg", title: "Клипы", news: "" },
    { ico: "/public/ico/leftBar/ico/games.svg", title: "Игры", news: "" },
    { ico: "/public/ico/leftBar/ico/sticer.svg", title: "Стикеры", news: "" },
    { ico: "/public/ico/leftBar/ico/marcet.svg", title: "Маркет", news: "" },
  ];

  const vkServes = [
    { ico: "/public/ico/leftBar/ico/server.svg", title: "Сервисы", news: "" },
    { ico: "/public/ico/leftBar/ico/pay.svg", title: "VK Pay", news: "" },
  ];
  const barAll = [
    { ico: "/public/ico/leftBar/ico/bookmarks.svg", title: "Закладки", news: "" },
    { ico: "/public/ico/leftBar/ico/friends.svg", title: "Файлы", news: "" },
    { ico: "/public/ico/leftBar/ico/advertising.svg", title: "Реклама", news: "" },
  ];
  return (
    <div className={styles.left_bar}>
      <nav>
        <ol>
          {userLink.map((item, index) => {
            return (
              <li key={item.title}>
                <img src={item.ico} alt="" />
                <span className={styles.title}>{item.title}</span>
                {item.news ? <span className={styles.news}>{item.news}</span> : ""}
              </li>
            );
          })}
          <div className={styles.line}></div>
          {vkServes.map((item, index) => {
            return (
              <li key={item.title}>
                <img src={item.ico} alt="" />
                <span>{item.title}</span>
                <span>{item.news}</span>
              </li>
            );
          })}
          <div className={styles.line}></div>
          {barAll.map((item, index) => {
            return (
              <li key={item.title}>
                <img src={item.ico} alt="" />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
