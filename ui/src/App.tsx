import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api/data";

function App() {
  const [count, setCount] = useState(0);
  const [personData, setPersonData] = React.useState([]);

  useEffect(() => {
    fetchData("data").then((result) => {
      setPersonData(result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <ul>
            <span>API Call results!</span>
            {personData.map((person) => {
              return <li>{JSON.stringify(person)}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
