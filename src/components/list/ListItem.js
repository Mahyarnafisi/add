import React from "react";
import "../../style/list/ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list-item">
      <div className="list__title">{props.title}</div>
      <div className="list__date">{props.date}</div>
      <div className="list__number">{props.number}</div>
    </div>
  );
};

export default ListItem;
