import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import  Profile  from "./components/Profile";

function App() {
  return (
    <Profile
      name="youssef bayoume"
      image="/images/user.jpg"
      bio="user bio"
    />
  );
}

export default App;
