import React from "react";
import styles from "./Loading.module.css";
const Loading = ({ value }: { value: number }) => {
  return (
    <div className={styles.telaLoading}>
      <div className={styles.loader}>
        <img src="https://i.imgur.com/xLNT3JO.png" />
        <progress
          className={styles.progress}
          value={value}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Loading;
