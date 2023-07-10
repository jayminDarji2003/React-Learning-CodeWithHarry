import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertUppercase = () => {
    let newTextUpp = text.toUpperCase();
    setText(newTextUpp);
  };

  const convertLowerCase = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
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
  }

  const handleCopy = () => {
    // console.log("copy done");
    // let text = document.getElementById("myTextBox");
    // navigator.clipboard.writeText(text.value);
    // text.select(); // It is select the text
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const clearText = () => {
    let newTextLow = "";
    setText(newTextLow);
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
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p className="text-center">
            {0.008 * text.split(" ").length} Minutes to Read
          </p>
        </div>
      </div>
    </>
  );
}
