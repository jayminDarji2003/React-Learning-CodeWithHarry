import React from "react";

function About(props) {
  return (
    <div>
      <div className="accordion container my-5"  id="accordionExample">
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
              <strong>Welcome</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Welcome to our text manipulation website! We are dedicated to
              providing you with a wide range of operations to help you
              transform and manipulate your text effortlessly. Whether you need
              to convert text to uppercase, lowercase, or explore various other
              text transformations, we've got you covered.
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
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              At our website, we understand the power of words and the impact
              they can have. Sometimes, a simple change in text case can make
              all the difference in conveying the right tone or emphasizing a
              specific point. With our easy-to-use tools, you can effortlessly
              convert your text to uppercase, giving it a bold and assertive
              appearance. Alternatively, you can convert it to lowercase,
              providing a softer and more relaxed feel. The choice is yours!
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
              <strong>Our Mission</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our website's mission is to empower individuals with easy-to-use
              text manipulation tools that enhance their creative expression and
              communication. We believe that words have immense power and that
              everyone should have access to tools that allow them to transform
              and manipulate text effortlessly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
