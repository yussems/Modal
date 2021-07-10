import React, { useState, useRef } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import Logos from "./Logos";
import "./Modal.css";

const data = {
  instagram: "https://www.instagram.com/faruk_turkoglu/",
  facebook_: "https://www.facebook.com/faruk.turkoglu.33",
  twiter_: "https://twitter.com/home?lang=en",
  linkedin_:
    "https://www.linkedin.com/in/mehmet-faruk-t%C3%BCrko%C4%9Flu-3097b9155/",
};

const Modal = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [input, setinput] = useState(true);
  const textAreaRef = useRef(null);

  const handleCoply = (e) => {
    textAreaRef.current.select();

    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <>
      <div onClick={() => {setinput(() =>!input)}}>
      <AiOutlineClose size={50} style={{cursor:'pointer'}}/>
      </div>
      {input ? <div className="container-box">
        <div className="header">
          <h2>Share this design</h2>
        </div>
        <div className="content">
          <Logos data={data} />
        </div>
        <div className="url-generator">
          <h4>Or copy link</h4>
          <div className="input-box">
            <input className="text-url" ref={textAreaRef} type="text" />
            <button onClick={handleCoply} className="btn">
              Copy
            </button>
            <h3>{copySuccess}</h3>
          </div>
        </div>
      </div> : ''}
      
    </>
  );
};

export default Modal;
