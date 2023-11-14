import "./App.css";
// import {Link} from "react-router-dom";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";;
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has been enabled", "success")
      document.title = "Textutils - Dark Mode"
      // setInterval(() => {
      //   document.title="Textutils  Is Worst"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Textutils  Is Worst Try to change it"

      // }, 2000);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has been enabled", "success")
      document.title = "Textutils - Light Mode"
    }
  }
  return (
     <>
      {/* <Navbar title="Textutils2" hd="Contact Us"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="Textutils" hd="About" mode={mode} toggleMode={toggleMode}>
          {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link> */}
        </Navbar>
        <Alerts alert={alert} />
        {/* <Switch>
    <Route exact path="/about">
      <About mode={mode} />
    </Route>
    <Route exact path="/"> */}
        <TextForm
          heading="Enter the text Here"
          mode={mode}
          alert={alert}
          showAlert={showAlert}
        />
        {/* </Route>
  </Switch>
</Router> */}
      </>
      );
}
      export default App;
