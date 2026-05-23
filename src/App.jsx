import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import News from "./pages/News";
import Venue from "./pages/Venue";
import Organizers from "./pages/Organizers";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Terms from "./pages/Terms";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
