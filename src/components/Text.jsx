import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(()=>{
    
  });
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};
