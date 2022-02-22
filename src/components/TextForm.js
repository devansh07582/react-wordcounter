import React, { useState } from 'react'

export default function TextForm(props) {

  const handleLowercaseChange =()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleUpercaseChange = ()=>{
    console.log("uppercase button was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  } 
  const handleChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }

  const captilisedFirstWord = ()=>{
    let word = text.split(" ");
    console.log(text);
    let newText =" ";
    word.forEach((element)=>{
      newText += element.charAt(0).toUpperCase()+element.slice(1)+" ";
    })
    setText(newText);
  }
  const [text,setText] =useState("");
    
  
  
  
  return (
       <>
      <div className = "mb-3 my-4">



        <h1>{props.text}</h1>



        <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleChange}  id="exampleFormControlTextarea1" rows="10"></textarea>
        <button className = "btn btn-primary my-2 mx-4" onClick= {handleUpercaseChange}>Convert to uppercase</button>
        <button className = "btn btn-primary my-2 mx-4" onClick= {handleLowercaseChange}>Convert to lowercase</button>
        <button className = "btn btn-primary my-2 mx-4" onClick= {captilisedFirstWord}>Captilised First letter</button>

        </div>
      </div>
      <div className="container">
      <h3>Text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters </p>
        <p>{0.008 * (text.split(" ").length-1)} minute reads</p>
      </div>



      <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>
    )
}
