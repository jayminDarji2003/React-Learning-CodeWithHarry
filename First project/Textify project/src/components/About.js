import React, { useState } from "react";

function About() {
  // const [colorMode, setColorMode] = useState("light");

  const changeToDark = () => {
    document.body.style.backgroundColor = '#6C757D';
  };
  const changeToWhite = () => {
    document.body.style.backgroundColor = '#fff';
  };
  const changeToBlue = () => {
    document.body.style.backgroundColor = '#0D6EFD';
  };
  const changeToGreen = () => {
    document.body.style.backgroundColor = '#1A814C';
  };
  const changeToRed = () => {
    document.body.style.backgroundColor = '#DC3545';
  };

  return (
    <div>
      <div className="accordion container my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance,
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the third item's accordion body.It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use
              to style each element. by default, until the collapse plugin adds
              the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
      </div>

      <div className="titleColor my-5">
        <h2 className="text-center">Choose Background Mode</h2>
      </div>

      <div className="container d-flex justify-content-center gap-3 bg-black p-4 w-auto mx-2">
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="dark"
          autocomplete="off"
        />
        <label class="btn btn-outline-secondary" onClick={changeToDark} for="dark">
          Dark
        </label>

        <input
          type="radio"
          class="btn-check text-secondary-emphasis"
          name="options-outlined"
          id="light"
          autocomplete="off"
          // checked
        />
        <label
          class="btn btn-outline-light border-1 border-secondary" onClick={changeToWhite}
          for="light"
        >
          Light
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="blue"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" onClick={changeToBlue} for="blue">
          Blue
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="green"
          autocomplete="off"
        />
        <label class="btn btn-outline-success" onClick={changeToGreen} for="green">
          Green
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="red"
          autocomplete="off"
        />
        <label class="btn btn-outline-danger" onClick={changeToRed} for="red">
          Red
        </label>
      </div>
    </div>
  );
}

export default About;
