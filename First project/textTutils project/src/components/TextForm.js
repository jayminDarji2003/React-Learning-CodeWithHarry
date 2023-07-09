import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertUppercase = () => {
    // console.log("Uppercase button clicked");
    let newTextUpp = text.toUpperCase();
    setText(newTextUpp);
  };

  const convertLowerCase = () => {
    // console.log("Lowercase button clicked");
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
  };

  const changeInValue = (event) => {
    // console.log("change");
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h2 className="mt-4">{props.heading}</h2>
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

      <div className="container d-flex justify-content-center align-items-center mt-5 row gap-3">
        <button
          type="button"
          className="btn btn-primary w-auto "
          onClick={convertUppercase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary w-auto"
          onClick={convertLowerCase}
        >
          Convert to LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
