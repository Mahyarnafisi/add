import React from "react";
import "../../style/list/List.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className="list">
      {props.initiateData.map((item) => {
        return <ListItem />;
      })}
    </div>
  );
};
export default List;
