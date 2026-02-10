import React, { useState } from 'react';

function ImageManipulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth]   = useState(200);
  const [imgRotate, setImgRotate] = useState(0);
  const [red, setRed]   = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue]  = useState(0);

  function handleWidth(){
    setCatWidth(catWidth + 10);
  }

  function handleHeight(){
    setCatHeight(catHeight + 10);
  }

  function changeBgColor(){
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function rotateImage(){
    setImgRotate(imgRotate + 45); 
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: '2px solid red',
          height: '400px',
          width:  '400px',
          marginLeft: '200px',
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      >
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXYQtoYGK1Rz8FmdhapVdoMkqqqrkob_r5Q&s'
          height={catHeight}
          width={catWidth}
          alt="cat image"
          style={{
            paddingLeft: '100px',
            paddingTop:  '100px',
            transform:   `rotate(${imgRotate}deg)`
          }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleHeight}>Increase Height</button>
        <button onClick={handleWidth}>Increase Width</button>
        <button onClick={rotateImage}>Rotate Image</button>
        <button onClick={changeBgColor}>Change Background Color</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
