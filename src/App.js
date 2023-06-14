import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/From";
import List from "./components/list/List";

const initiateData = [
  { id: 1, title: "Go to gym and do exercise", date: "2023 12 24", number: 1, tagColor: "#fdbf11", bgColor: "#fdbf11" },
  { id: 2, title: "Practice yoga and tel mom", date: "2023 11 04", number: 2, tagColor: "#6c56c2", bgColor: "#ff7191" },
  { id: 3, title: "Study harder and hared!", date: "2023 11 14", number: 3, tagColor: "#fdbf11", bgColor: "#6c56c2" },
  { id: 4, title: "Go to shopping mall", date: "2023 11 03", number: 4, tagColor: "#ff7191", bgColor: "#fdbf11" },
  { id: 5, title: "Go to gym and as petters", date: "2023 11 01", number: 5, tagColor: "#ff7191", bgColor: "#6c56c2" },
];

function App() {
  const [updateData, setUpdateData] = useState(initiateData);
  const newDataPush = (data) => {
    setUpdateData((prevData) => {
      return [data, ...prevData];
    });
    console.log(updateData);
    console.log("from appjs");
  };
  return (
    <div className="App">
      <Form newDataClimbUp={newDataPush} />
      <List initiateData={initiateData} />
    </div>
  );
}

export default App;
