import React from "react";
import styles from "../cssModules/inner.module.css";
export default function InnerContainer({ children }) {
  return <div className={styles.inner}> {children}</div>;
}
