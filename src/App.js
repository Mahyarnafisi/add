import React from "react";
import "./App.css";
import Form from "./components/form/From";
import List from "./components/list/List";

const initiateData = [
  { id: 1, title: "Go to gym and do exercise", date: "2023 12 24", number: 1 },
  { id: 2, title: "Practice yoga and tel mom", date: "2023 11 04", number: 2 },
  { id: 3, title: "Study harder and hared!", date: "2023 11 14", number: 3 },
  { id: 4, title: "Go to shopping mall", date: "2023 11 03", number: 4 },
  { id: 5, title: "Go to gym and as petters", date: "2023 11 01", number: 5 },
];

function App() {
  return (
    <div className="App">
      <Form />
      <List initiateData={initiateData} />
    </div>
  );
}

export default App;
