import React from "react";

import styles from "./UiToggler.module.scss";

export function UiToggler() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className={`${styles.ui_togger} boxBorder`} onClick={() => setStatus(!status)}>
      <img src="/public/ico/narrow_column/UiToggler.svg" alt="" />
      <span>Сначала интересные</span>
      <div className={styles.wrap}>
        <div className={`${styles.circle} ${status ? styles.circle_on : styles.circle_of}`}></div>
      </div>
    </div>
  );
}
