import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
