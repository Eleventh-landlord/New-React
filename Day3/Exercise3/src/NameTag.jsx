import React, { useState } from "react";
import "./App.css";

function NameTag() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleDownload = () => {
    alert(
      `--- NAME TAG ---\nHello, my name is\n${name.toUpperCase()}\n${title}\n${company}`
    );
  };

  return (
    <div className="nametag-container">
      <h2> Name Tag Generator</h2>

      {/* Input Fields */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {/* Name Tag Preview */}
      <div className="name-tag">
        <h3>Hello, my name is</h3>
        <h1>{name ? name.toUpperCase() : "_________"}</h1>
        <p>{title || "Your Job Title"}</p>
        <p>{company || "Your Company"}</p>
      </div>

      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default NameTag;
