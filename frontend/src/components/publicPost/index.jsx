import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./PublicPost.module.scss";
import { MyApp } from "./Calendar/Calendar";
import { PublicationForUsers } from "./postVisibility/index";
export function PublicPost({ activeInput, setActiveInput }) {
  const [value, onChange] = React.useState(new Date());
  const [openCal, setOpenCal] = React.useState(false);

  const boxPost = [
    {
      url: "/public/ico/box_post/item_photo.svg",
      class: `${styles.postPhoto} photo`,
      clue: "Фотография",
      sep: "",
    },
    {
      url: "/public/ico/box_post/item_video.svg",
      class: styles.postVideo,
      clue: "Видеозапись",
      sep: "",
    },
    {
      url: "/public/ico/box_post/item_audio.svg",
      class: styles.postAudio,
      clue: "Аудиозапись",
      sep: "",
    },
    {
      url: "/public/ico/box_post/item_article.svg",
      class: styles.postArticle,
      clue: "Статья",
      sep: "",
    },
    {
      url: "/public/ico/box_post/item_short_video.svg",
      class: styles.postShort,
      clue: "Клип",
      sep: `${styles.sep} sep`,
    },
    {
      url: "/public/ico/box_post/BestFriendsSettingsEntrypoint__layout.svg",
      clue: "Выбор близких друзей",
      class: styles.postSettings,
      sep: "",
    },
  ];
  return (
    <>
      {}
      <div className={`${styles.box_post} boxBorder`}>
        <label className={styles.post} id="inputPost">
          <div className={styles.inputPost}>
            <img src="/public/ico/headerNav/foto.jpg" alt="" />
            <input
              onClick={() => {
                setActiveInput(true);
              }}
              placeholder="Что у вас нового?"
              id="inputPost"
              type="text"
            />
          </div>

          <div className={styles.nav}>
            {activeInput ? (
              <div>
                <button className={`${styles.svgBtn}`}>
                  <HandySvg src="/public/ico/box_post/em.svg" className={`${styles.svg}`} />
                </button>
              </div>
            ) : (
              <ul>
                {boxPost.map((item, index) => {
                  return (
                    <li key={index}>
                      <button className={`${styles.svgBtn}`}>
                        <HandySvg src={item.url} className={`${styles.svg}`} />
                      </button>
                      {item.sep && <div key={index} className={item.sep}></div>}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </label>
        {activeInput && (
          <div className={styles.post_actions_btns}>
            <div className={`${styles.sepActive} sep`}></div>
            <button
              onClick={() => {
                console.log("Что у вас нового?");
                setActiveInput(false);
              }}
              className={styles.sepActive_close}>
              <span>
                <svg
                  class="feather feather-x-circle"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" x2="9" y1="9" y2="15" />
                  <line x1="9" x2="15" y1="9" y2="15" />
                </svg>
              </span>
            </button>
            <div className={styles.postVisibility}>
              <div className={styles.publicationFor}>
                <PublicationForUsers />
              </div>
              <div className={styles.calen}>
                <button
                  onClick={() => {
                    setOpenCal(!openCal);
                  }}>
                  <span>{value.toLocaleDateString()}</span>
                </button>
                {openCal && (
                  <div className={styles.calen_calendar}>
                    <MyApp value={value} onChange={onChange} className={`boxBorder`} />
                  </div>
                )}
              </div>
            </div>
            <div className="sep" style={{ borderTop: "none" }}></div>
          </div>
        )}
      </div>
    </>
  );
}
