import React from "react";
import styles from "../../style/list/ListItem.module.css";
const ListItem = (props) => {
  return (
    <div className={`${styles["list-item"]} `} style={{ backgroundColor: `${props.bgColor}` }}>
      <div className={styles["list__date"]} style={{ color: `${props.bgColor}` }}>
        {props.date}
      </div>
      <div className={`${styles["list__title"]}`}>{props.title}</div>
      <div className={`${styles["list__number"]}`} style={{ backgroundColor: `${props.tagColor}` }}>
        {props.number}
      </div>
    </div>
  );
};

export default ListItem;
