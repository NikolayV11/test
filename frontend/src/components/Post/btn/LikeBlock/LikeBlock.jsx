import React from "react";
import { HandySvg } from "handy-svg";
import styles from "./LikeBlock.module.scss";

export function LikeBlock({ data }) {
  const [statusLike, setStatusLike] = React.useState(data.like.status);
  const [statusRepost, setStatusRepost] = React.useState(data.repost.status);

  return (
    <div className={styles.likeBlock}>
      <div className={styles.likeBlock_likebtn}>
        <div className={`${styles.likebtn_blok} ${styles.likebtn_like}`}>
          <button onClick={() => setStatusLike(!statusLike)}>
            <HandySvg
              className={`post_header_btn img_SVG_color ${statusLike ? "active_SVG" : ""}`}
              src="/public/ico/post_btn/like_btn.svg"
            />
            {data.like.quantity}
          </button>
        </div>
        {data.comments.status && (
          <div className={`${styles.likebtn_blok} ${styles.likebtn_comment} `}>
            <button>
              <HandySvg
                className={`post_header_btn img_SVG_color`}
                src="/public/ico/post_btn/comments_btn.svg"
              />
              {data.comments.quantity}
            </button>
          </div>
        )}
        <div className={`${styles.likebtn_blok} ${styles.likebtn_repost} `}>
          <button
            onClick={() => {
              setStatusRepost(!statusRepost);
              console.log(`repost ${statusRepost}`);
            }}>
            <HandySvg
              className={`post_header_btn img_SVG_color ${statusRepost ? "active_SVG" : ""}`}
              src="/public/ico/post_btn/repost_btn.svg"
            />
            {data.repost.quantity}
          </button>
        </div>
      </div>
      <div className={`${styles.likeBlock_likeViews}`}>
        <span>
          <HandySvg
            className={`post_header_btn img_SVG_color`}
            src="/public/ico/post_btn/views_btn.svg"
          />
          {data.views}
        </span>
      </div>
    </div>
  );
}
