import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import AddMovie from "./components/Movies/Add";
import Movie from "./components/Movies/FetchMovie";
import SearchBar from "./components/SearchBar/SearchBar";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <SearchBar />
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/Add" element={<AddMovie />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
