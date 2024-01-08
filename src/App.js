import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const removeBodyClass = ()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
  }
  const toggleMode = (cls) =>{
    if(mode === "light"){
      removeBodyClass();
      console.log(cls)
      document.body.classList.add("bg-"+cls)
      setMode("dark");
      document.body.style.background = "#473434";
      showAlert(" Dark mode has been enabled", "success");
      // document.title = "TextUtils = Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      showAlert(" Light mode has been enabled", "success");
      // document.title = "TextUtils = Light Mode";
    }
  }
  // const setGreen = () =>{
  //     setMode("light");
  //     document.body.style.background = "#40534f";
  //     showAlert(" Green Dark mode has been enabled", "success");
  // }
  // const setBlue = () =>{
  //   setMode("dark");
  //   document.body.style.background = "#2e2f6f";
  //   showAlert(" Blue Dark mode has been enabled", "success");
// }
  return (
    <>
    <BrowserRouter>

    <Navbar title = "TextUtils" aboutText = "About Us"  mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
		<Route path='/about' element={<About mode = {mode}/>}/> 
    </Routes>
    <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading = "Enter the Text to analyze" mode = {mode}/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
