import React from "react";
import styles from "./Main.module.scss";

import { LeftBar } from "../barLeft";
import { News } from "../../pages/news";

export function Main() {
  const [dataPost, setDatapost] = React.useState([]);
  React.useEffect(() => {
    fetch("/post")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setDatapost(data);
      });
  }, []);
  return (
    <main className={styles.main}>
      <div className="content">
        <div className={styles.page}>
          <LeftBar />
          <News dataPost={dataPost} />
        </div>
      </div>
    </main>
  );
}
