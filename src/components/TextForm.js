import React, { useState } from "react";

export default function TextForm(props) {
  const copyTheText=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleUpClick = () => {
   
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };
  const clearTheText=()=>{
   
    setText(" ");
  }
  const clearTheSpaces=()=>{
    let space=text.split(/[ ]+/)
    setText(space.join(" "))
  }
  const handleDownClick=()=>{
    let oldText=text.toLowerCase();
    setText(oldText)
    props.showAlert("Converted to Lower Case","success")
  }
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("Enter your text")
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h2>{props.heading} </h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}}
          id="myBox"
          rows="8"
        >
          {" "}
        </textarea>
        <button className="btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn-secondary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button type="button" className="btn btn-info mx-2" onClick={clearTheText}> Clear Text</button>
        <button type="button" className="btn btn-danger mx-2" onClick={copyTheText}>Copy</button>
        <button type="button" className="btn btn-success" onClick={clearTheSpaces}>Clear The Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{(1/125)*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
      </div>
    </>
  );
}
