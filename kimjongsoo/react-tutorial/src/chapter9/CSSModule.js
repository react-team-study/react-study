import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    //  <div className={`${styles.wrapper} ${styles.inverted}`}>
    <div className={cx("wrapper", "inverted")}>
      Hello ! React<span className="something">CSSModule</span>
    </div>
  );
};

export default CSSModule;
