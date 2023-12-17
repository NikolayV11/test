import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./Post.module.scss";

import { Actions } from "./btn/Actions/Actions";

export function Post({ data }) {
  console.log(data);
  return (
    <div className={`${styles.post} boxBorder`}>
      <div className={styles.post__header}>
        <div className={styles.post__header_info}>
          <div className={styles.info__img}>
            <img src={data.sender.ico} alt="logo" />
          </div>
          <div className={styles.info__title}>
            <a href="#" className={styles.info__title_link1}>
              <span>{data.sender.publisher}</span>
            </a>
            <a href="#" className={styles.info__title_link2}>
              <span>{data.sender.time}</span>
            </a>
          </div>
        </div>
        <div className={styles.post__header_actions}>
          {data.sender.subscription ? (
            <Actions />
          ) : (
            <>
              <div
                className={`${styles.post_btn} ${styles.subscribe_block}`}
                aria-hidden="true"
                title="Подписаться">
                <HandySvg
                  className={`post_header_btn ${styles.SVG}`}
                  src="/public/ico/post_btn/subscribe_btn.svg"
                />
              </div>
              <Actions />
            </>
          )}
        </div>
      </div>
      <div className={styles.post__content}>
        <div className={styles.post__content_text}>
          <span>{data.content.article}</span>
        </div>
        <div className={styles.post__content_mediaContent}>
          {data.content.mediaContent.map((item, index) => {
            return <>{item.type === "img" && <img key={index} src={item.url} alt="img" />}</>;
          })}
        </div>
      </div>
      <div className={styles.post__likeBlock}>
        <div className={styles.post__likeBlock_likebtn}></div>
        <div className={styles.post__likeBlock_likeViews}> </div>
      </div>
    </div>
  );
}
