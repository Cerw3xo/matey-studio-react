import { useState } from "react";
import "./styles/base.css";
import "./styles/main.scss";
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
