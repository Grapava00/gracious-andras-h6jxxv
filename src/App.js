import React from "react";
import axios from "axios";

export const App = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (selectedFile) {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append("myFile", selectedFile, selectedFile.name);

      // Details of the uploaded file
      console.log(selectedFile);

      // Request made to the backend api
      // Send formData object
      // axios.post("api/uploadfile", formData);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>upload</button>
    </div>
  );
};
