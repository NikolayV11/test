import React from "react";
import { HandySvg } from "handy-svg";
import styles from "./PostEditing.module.scss";
import { MediaSelector } from "./../MediaSelector/index";

export function PostEditing() {
  return (
    <div className={`${styles.post_editing}`}>
      <div className={`${styles.post_editing__left}`}>
        <div className={`${styles.poster}`}>
          <img src="/public/ico/box_post/color_button_20.png" alt="" />
        </div>
        <div className={`${styles.sep} sep`}></div>
        <button className="PublicPost_Btn">
          <HandySvg
            className="PublicPost_SVG"
            src="/public/ico/box_post/BestFriendsSettingsEntrypoint__layout.svg"
          />
        </button>
        <div className={`${styles.sep} sep`}></div>
        <MediaSelector />
      </div>
    </div>
  );
}
