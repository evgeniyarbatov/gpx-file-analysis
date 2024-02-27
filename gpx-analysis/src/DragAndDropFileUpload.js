import React, { useState } from 'react';

function DragAndDropFileUpload() {
  const [fileContent, setFileContent] = useState('');

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    readFileContent(file);
  };

  const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        paddingTop: '20px',
        cursor: 'pointer',
      }}
    >
      {fileContent ? (
        <div>
          <h3>File Content:</h3>
          <pre>{fileContent}</pre>
        </div>
      ) : (
        <p>Drag and drop a file here, or click to select a file</p>
      )}
    </div>
  );
}

export default DragAndDropFileUpload;