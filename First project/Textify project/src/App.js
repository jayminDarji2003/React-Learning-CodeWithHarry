// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // darm mode state
  const [mode, setMode] = useState('light');

  // alert state
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enabled" , "Successful");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "Successful");
    }
  }

  return ( 
    <>
      <Navbar title="Textify" aboutText="About US" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>

      <div className="container">
        <TextForm showAlert={showAlert} heading="Play With Your Text"  mode={mode} />
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
