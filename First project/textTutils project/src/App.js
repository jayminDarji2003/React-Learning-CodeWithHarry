// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textify" aboutText="About US" />

      <div className="container">
        <TextForm heading="Play With Your Text" />
      </div>
    </>
  );
}

export default App;
