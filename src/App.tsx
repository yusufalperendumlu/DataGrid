import "devextreme/dist/css/dx.light.css";
import { useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Navbar />
        <Home />
      </main>
    </>
  );
}

export default App;
