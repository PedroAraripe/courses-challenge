import React from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import Home from "./pages/home/index";
import RepositoryTemplate from "./pages/ScriptArticle";
import Navbar from "./common/components/Navbar";

export default function App() {  
  return (
    <Router>
      <Navbar />

      <div className="py-5 my-lg-5"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scripts"  element={<RepositoryTemplate />} />
        </Routes>
    </Router>
  )
}