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
    // let text = document.getElementById("myTextBox");
    // text.select();
    // text.setSelectionRange(0,9999);
    // navigator.clipboard.writeText(text.value);
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
        <h2 className={`mt-4 fw-bold text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h2>
        <div className="mb-3 mt-3">
          {/* <label htmlFor="myTextBox" className="form-label mb-3">
          Enter your Text
        </label> */}
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

      {/* Operation buttons  */}

      <div className={`title my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h3 className="text-center fw-bold ">Perform Operations</h3>
      </div>
      <div className="container d-flex justify-content-center align-items-center my-4 row gap-3">
        <button
          type="button"
          className="btn btn-primary w-auto "
          onClick={convertUppercase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={convertLowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={convertCapitalCase}
        >
          CapitalCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={speak}
        >
          Speak Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={reverseText}
        >
          Reverse Text
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={handleExtraSpaces}
        >
          Remove Space
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto w-auto"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>

      <hr />

      {/* section three  */}
      <div className={`container my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <div>
          <h3 className="text-center fw-bold">Your Text Summary</h3>
          <p className="text-center">
            {text == "" ? 0: text.split(" ").length-1} words and {text.length} characters
          </p>
          <p className="text-center">
            {0.008 * text.split(" ").length} Minutes to Read
          </p>
        </div>
      </div>
    </>
  );
}
