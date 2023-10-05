import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Components/Home/Home";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {

    const [load, upadateLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);


  return (
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
