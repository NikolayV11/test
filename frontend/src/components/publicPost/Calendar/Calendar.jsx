import React from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.scss";
export function MyApp({ value, onChange }) {
  console.log(value);
  return (
    <>
      <Calendar className={` boxBorder`} onChange={onChange} value={value} />
    </>
  );
}
