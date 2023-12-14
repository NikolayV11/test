import styles from "./Main.module.scss";

import { LeftBar } from "../barLeft";
import { News } from "../../pages/news";
export function Main() {
  return (
    <main className={styles.main}>
      <div className="content">
        <div className={styles.page}>
          <LeftBar />
          <News />
        </div>
      </div>
    </main>
  );
}
