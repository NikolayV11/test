import React from "react";
import { HandySvg } from "handy-svg";

import styles from "./MediaSelector.module.scss";

export function MediaSelector() {
  const boxPost = [
    {
      url: "/public/ico/box_post/item_photo.svg",
      class: `${styles.postPhoto} photo`,
      clue: "Фотография",
    },
    {
      url: "/public/ico/box_post/item_video.svg",
      class: styles.postVideo,
      clue: "Видеозапись",
    },
    {
      url: "/public/ico/box_post/item_audio.svg",
      class: styles.postAudio,
      clue: "Аудиозапись",
    },
    {
      url: "/public/ico/box_post/item_article.svg",
      class: styles.postArticle,
      clue: "Статья",
    },
    {
      url: "/public/ico/box_post/item_short_video.svg",
      class: styles.postShort,
      clue: "Клип",
    },
  ];
  return (
    <ul>
      {boxPost.map((item, index) => {
        return (
          <li key={index}>
            <button className="PublicPost_Btn">
              <HandySvg src={item.url} className="PublicPost_SVG" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
