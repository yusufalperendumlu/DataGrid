import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.common.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
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
