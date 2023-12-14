import React from "react";

import styles from "./news.module.scss";
// left
import { PublicPost } from "../../components/publicPost";
// right
import { UiMenu } from "../../components/uiMenu";
import { UiToggler } from "../../components/uiToggler";
export function News() {
  const [activeInput, setActiveInput] = React.useState(false);
  return (
    <div className={styles.news}>
      <div className={styles.wide_column}>
        <PublicPost activeInput={activeInput} setActiveInput={setActiveInput} />
      </div>
      <h1>ky</h1>
      <div className={styles.narrow_column}>
        <UiMenu />
        <UiToggler />
      </div>
    </div>
  );
}
