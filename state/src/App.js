import React from "react";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Profile
        image="/images/1157150.png"
        name="youssef abdelhameed bayoume"
        profession="Full-stack js Developer"
        bio="biooo" />
      </>
    );
  }
}

export default App;
