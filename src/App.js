import "./App.css";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./home/home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/coding"></Route>
      <Route path="/motoring"></Route>
      <Route path="/photography"></Route>
    </BrowserRouter>
  );
}

export default App;
