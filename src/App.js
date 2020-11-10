import React from "react";
import './App.css';
import Title from './components/Title'
import APIContainer from "./components/APIContainer";


function App() {
  return (
    <div className="App">
      <Title> Employee-Directory </Title>
      <APIContainer/>
    </div>
  );
}

export default App;
