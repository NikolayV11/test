import React from "react";

import styles from "./Post.module.scss";

export function Post({ sender, content, likeContent }) {
  return (
    <div className={`${styles.post} boxBorder`}>
      <div className={styles.post__header}>
        <div className={styles.post__header_info}>
          <div className={styles.info__img}>
            <img src={sender.ico} alt="logo" />
          </div>
          <div className={styles.info__title}>
            <a href="#" className={styles.info__title_link1}>
              <span>{sender.publisher}</span>
            </a>
            <a href="#" className={styles.info__title_link2}>
              <span>{sender.time}</span>
            </a>
          </div>
        </div>
        <div className={styles.post__header_actions}>
          {sender.subscription ? (
            <span aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g
                  id="more_horizontal_24__Page-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd">
                  <g id="more_horizontal_24__more_horizontal_24">
                    <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
                    <path
                      d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
                      id="more_horizontal_24__Mask"
                      fill="currentColor"></path>
                  </g>
                </g>
              </svg>
            </span>
          ) : (
            <span aria-hidden="true" title="Подписаться">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 7a.9.9 0 0 1 .9.9v3.2h3.2a.9.9 0 0 1 .9.9.9.9 0 0 1-.9.9h-3.2v3.2a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9v-3.2H7.9A.9.9 0 0 1 7 12a.9.9 0 0 1 .9-.9h3.2V7.9A.9.9 0 0 1 12 7ZM9.46 3h5.08c.95 0 1.71 0 2.33.05.64.05 1.2.16 1.73.43a4.4 4.4 0 0 1 1.92 1.92c.27.52.38 1.09.43 1.73.05.62.05 1.38.05 2.33v5.08c0 .95 0 1.71-.05 2.33-.05.64-.16 1.2-.43 1.73a4.4 4.4 0 0 1-1.92 1.92 4.5 4.5 0 0 1-1.73.43c-.62.05-1.38.05-2.33.05H9.46c-.95 0-1.71 0-2.33-.05a4.5 4.5 0 0 1-1.73-.43 4.4 4.4 0 0 1-1.92-1.92 4.5 4.5 0 0 1-.43-1.73C3 16.25 3 15.5 3 14.54V9.46c0-.95 0-1.71.05-2.33.05-.64.16-1.2.43-1.73A4.4 4.4 0 0 1 5.4 3.48a4.51 4.51 0 0 1 1.73-.43C7.75 3 8.5 3 9.46 3ZM7.27 4.84c-.52.05-.82.13-1.05.24a2.6 2.6 0 0 0-1.14 1.14c-.11.23-.2.53-.24 1.05-.04.54-.04 1.24-.04 2.23v5c0 1 0 1.69.04 2.23.05.52.13.82.24 1.05a2.6 2.6 0 0 0 1.14 1.14c.23.11.53.2 1.05.24.54.04 1.24.04 2.23.04h5c1 0 1.69 0 2.23-.04.52-.05.82-.13 1.05-.24a2.6 2.6 0 0 0 1.14-1.14c.11-.23.2-.53.24-1.05.04-.54.04-1.24.04-2.23v-5c0-1 0-1.69-.04-2.23a2.77 2.77 0 0 0-.24-1.05 2.6 2.6 0 0 0-1.14-1.14c-.23-.11-.53-.2-1.05-.24-.54-.04-1.24-.04-2.23-.04h-5c-1 0-1.69 0-2.23.04Z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className={styles.post__content}>
        <div className={styles.post__content_text}>
          <span>{content.article}</span>
        </div>
        <div className={styles.post__content_mediaContent}>
          {content.mediaContent.map((item, index) => {
            return <>{item.type === "img" && <img key={index} src={item.url} alt="img" />}</>;
          })}
        </div>
      </div>
      <div className={styles.post__likeBlock}>
        <div className={styles.post__likeBlock_likebtn}> </div>
        <div className={styles.post__likeBlock_likeViews}> </div>
      </div>
    </div>
  );
}
