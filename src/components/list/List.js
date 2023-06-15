import React from "react";
import "../../style/list/List.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className="list">
      {props.initiateData.map((item) => {
        return <ListItem key={item.id} number={item.number} title={item.title} date={item.date} bgColor={item.bgColor} />;
      })}
    </div>
  );
};
export default List;
