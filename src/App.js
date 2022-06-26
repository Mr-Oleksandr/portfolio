import React, {useState} from "react";
import TopbBar from "./Components/Topbar/TopbBar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import './App.scss'
import Menu from "./Components/Menu/Menu";
function App() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopbBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <Portfolio/>
            <Works/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;
