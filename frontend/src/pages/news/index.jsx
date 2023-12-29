import React from "react";

import styles from "./news.module.scss";
// left
import { PublicPost } from "../../components/publicPost";
import { Post } from "../../components/Post/Post";
// right
import { UiMenu } from "../../components/uiMenu";
import { UiToggler } from "../../components/uiToggler";
export function News({ dataPost }) {
  const [scrollI, setScrollI] = React.useState(0);

  return (
    <div className={styles.news}>
      <div className={styles.wide_column}>
        <PublicPost />
        {dataPost.map((item, index) => {
          return <Post key={index} data={item} />;
        })}
      </div>{" "}
      <div className={styles.narrow_column} style={{ marginTop: `${scrollI}` }}>
        <UiMenu />
        <UiToggler />
      </div>
    </div>
  );
}
