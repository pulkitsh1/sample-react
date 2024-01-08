import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to uppercase.", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowercase.", "success");
    }

    const handleClearText = () =>{
        setText("");
        props.showAlert(" The text is cleared.", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () =>{
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied Text.", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces has been cleared.", "success");
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === "dark"?"white":"#473434"}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "dark"?"#694d4d":"white" , color:props.mode === "dark"?"white":"#473434"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercae</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === "dark"?"white":"#473434"}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
