import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TextForm({ heading }) {
  const [text, settext] = useState("");

  const setToUp = () => {
    settext(text.toUpperCase());
  };

  const setToLo = () => {
    settext(text.toLowerCase());
  };

  const FirstLetterUp = () => {
    let textArray = text.toLowerCase().split(" ");

    textArray.forEach((val, i, arr) => {
      let newVal = "";
      let excludeOne = val.slice(1);
      let firstUpper = val.charAt(0).toUpperCase();
      newVal = firstUpper + excludeOne;
      arr[i] = newVal;
    });
    settext(textArray.join(" "));
  };

  return (
    <div>
      <h1>{heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="myBox"
          rows="3"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter some text"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 " onClick={setToUp}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={setToLo}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={() => settext("")}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={FirstLetterUp}>
        First Letter Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={() => ""}>
        copy
      </button>
      <h1>Your Text Summary</h1>
      <p>
        <h4>
          {text.length}
          {text.length > 1 ? " Characters" : " Character"}
        </h4>
        <h4>
          {text.length > 0 ? text.split(" ").length : "0"}
          {text.split(" ").length > 1 ? " words" : " word"}
        </h4>
        <h4>{0.008 * text.split(" ").length} Minutes To Read</h4>
      </p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
  );
}

export default TextForm;
