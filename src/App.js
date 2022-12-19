import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./home/home";
import Navbar from "./components/Navbar/Navbar";
import Coding from "./coding/coding";
import Photography from "./photography/photography";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    return (document.title = "Jake Whatling");
  });
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route path="/">
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/coding">
        <Coding></Coding>
      </Route>
      <Route path="/motoring"></Route>
      <Route path="/photography">
        <Photography />
      </Route>
    </BrowserRouter>
  );
}

export default App;
