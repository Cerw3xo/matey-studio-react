import { useState } from "react";
import "./App.css";
import "./styles/main.scss";
import "./styles/base.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
    </>
  );
}

export default App;
