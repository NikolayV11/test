import React from "react";
import styles from "./PublicationForUsers.module.scss";
export function PublicationForUsers({ openList, setOpenList, setOpenCal }) {
  const listPublic = ["Видно всем", "Видно друзьям", "Выбать Близких друзей"];
  const [itemListPublic, setItemListPublic] = React.useState("Видно всем");

  return (
    <div className={styles.blocPublic}>
      <div>
        <button
          className={styles.blocBtn}
          onClick={() => {
            setOpenList(!openList);
            setOpenCal(false);
          }}>
          <span className={styles.blocBtn_title}>{itemListPublic}</span>
          <span className={styles.blocBtn_img}>
            <svg
              fill="none"
              height="8"
              viewBox="0 0 12 8"
              width="12"
              xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z"
                fill="currentColor"
                fill-rule="evenodd"></path>
            </svg>
          </span>
        </button>
      </div>

      <ul className={`${styles.list} boxBorder ${openList ? styles.active_on : styles.active_off}`}>
        {listPublic.map((item, index) => {
          return (
            <li>
              <button
                onClick={() => {
                  setItemListPublic(item);
                  setOpenList(!openList);
                }}>
                <span
                  className={styles.list_title}
                  style={{ color: `${index === 2 && `#71aaeb`}` }}>
                  {item}
                </span>
                {itemListPublic === item && (
                  <span className={styles.list_ico}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.74 3.76c.35.34.35.9 0 1.23l-7.31 7.25a.88.88 0 0 1-1.25 0L2.26 9.36a.87.87 0 0 1 0-1.23.88.88 0 0 1 1.24 0l2.3 2.26 6.7-6.63a.88.88 0 0 1 1.24 0Z"
                        fill="#71aaeb"></path>
                    </svg>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
