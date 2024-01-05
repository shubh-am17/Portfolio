import "./App.css";

import Sidebar from "./components/Sidebar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Skills from "./pages/Skills.js";
import Works from "./pages/Works.js";

function App() {
  return (
    <div className="AppBody">
      <Sidebar />
      <div className="App">
        <Home />
        <About />
        <Skills />
        <Works/>
      </div>
    </div>
  );
}

export default App;
