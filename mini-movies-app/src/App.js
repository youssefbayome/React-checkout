import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import AddMovie from "./components/Movies/Add";
import Filter from "./components/Movies/Filter";
import Movie from "./components/Movies/FetchMovie";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Movie />} />
        <Route path="/Add" element={<AddMovie />} />
      </Routes>
    </div>

    <GlobalStyle />
  </Router>
);

export default App;
