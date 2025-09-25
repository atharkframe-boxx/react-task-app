import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello React</h1>
        <p>My first React app!</p>

        <h1>Day 2: Props in React</h1>
        <Greeting name="Athar" />
        <Greeting name="Khan" />
        <Greeting name="React Developer" />

        <h1>Day 2: State in React</h1>
        <Greeting name="Athar" />
        <Counter />
      </div>
    </>
  );
}

export default App;
