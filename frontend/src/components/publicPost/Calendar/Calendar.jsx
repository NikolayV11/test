import React from "react";

import Calendar from "react-calendar";
import styles from "./styles.module.scss";
import "./Calendar.css";
console.log(styles);
export function MyApp({ value, onChange }) {
  console.log(value);
  return (
    <>
      <Calendar className={` ${styles.calendar}`} onChange={onChange} value={value} />
    </>
  );
}
