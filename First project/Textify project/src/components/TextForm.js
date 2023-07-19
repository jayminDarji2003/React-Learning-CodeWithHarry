import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertUppercase = () => {
    let newTextUpp = text.toUpperCase();
    setText(newTextUpp);
    props.showAlert("Converted to Uppercase", "Successful");
  };

  const convertLowerCase = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
    props.showAlert("Converted to Lowercase", "Successful");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text speaking", "Successful");
  };

  function convertCapitalCase() {
    let arr = text.split(" ");
    let c = arr.length;
    let temp = "";
    while (c !== 0) {
      temp =
        arr[c - 1].charAt(0).toUpperCase() +
        arr[c - 1].substring(1).toLowerCase() +
        " " +
        temp;
      c--;
    }
    setText(temp);
    props.showAlert("Converted to Capitalcase", "Successful");
  }

  const handleCopy = () => {
    // navigator.clipboard.writeText(text);
    // props.showAlert("Copy to Clipboard", "Successful");
  };
 

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed Extra Spaces", "Successful");
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reversed Text", "Successful");
  };

  const clearText = () => {
    let newTextLow = "";
    setText(newTextLow);
    props.showAlert("Cleared Text", "Successful");
  };

  const changeInValue = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h2 className={`mt-3 fw-bold text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h2>
        <div className="mb-3 mt-3">
          <textarea
            className="form-control"
            value={text}
            id="myTextBox"
            rows="8"
            placeholder="Enter text here"
            onChange={changeInValue}
          ></textarea>
        </div>
      </div>

      <div className={`title my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h3 className="text-center fw-bold ">Perform Operations</h3>
      </div>
      <div className="container d-flex justify-content-center align-items-center my-4 row gap-3">
        <button
          type="button"
          className="btn btn-primary w-auto "
          onClick={convertUppercase}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={convertLowerCase}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={convertCapitalCase}
          disabled={text.length === 0}
        >
          CapitalCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={speak}
          disabled={text.length === 0}
        >
          Speak Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={reverseText}
          disabled={text.length === 0}
        >
          Reverse Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Space
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto w-auto"
          onClick={clearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>

      <hr />

      {/* section three  */}
      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <div>
          <h3 className="text-center fw-bold">Your Text Summary</h3>
          <p className="text-center m-0">
            {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
          </p>
          <p className="text-center">
            {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to Read
          </p>
        </div>
      </div>
    </>
  );
}
