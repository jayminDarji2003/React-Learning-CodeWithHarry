// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  // It shows dark mode is enabled or not
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return ( 
    <>
      <Navbar title="Textify" aboutText="About US" mode={mode} toggleMode={toggleMode} />

      <div className="container">
        <TextForm heading="Play With Your Text" mode={mode} />
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
