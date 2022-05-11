import React, { useState } from "react";
import Axios from "axios";

function UploadImage() {
  const [image, setImage] = useState([]);
  const [filename, setFileName] = useState("");

  const uploadImageHandler = (e) => {
    Axios.post("http://localhost:5000/admin/uploadimage", {
      image: image,
      filename: filename,
    })
      .then(() => {
        alert("uploaded successfully");
      })
      .catch("failed");
      console.log(image);
    }
  // };
  // const uploadImageHandler = (e) => {
  //   Axios.post("http://localhost:5000/uploadimage", {
  //     image: image,
  //     filename: filename,
  //   })
  //     .then(() => {
  //       alert("uploaded successfully");
  //     })
  //     .catch("failed");
  //     console.log('image', image);

  // };

  // const uploadImageHandler = async (e) => {
  //   const form = new FormData();
  //   form.append("image", {
  //     uri: image,
  //     type: "image/jpg",
  //     headers: { "content-type": "multipart/form-data" },
  //     name: filename,
  //   });

  //   try {
  //     const res = await axios.post("http://localhost:5000/uploadimage", form);
  //     console.log("res111", res);
  //   } catch (ex) {
  //     console.log("ex", ex);
  //   }
  //   // Axios.post("http://localhost:5000/uploadimage", form)
  //   //   .then(() => {
  //   //     alert("uploaded successfully");
  //   //   })
  //   //   .catch("failed");
  // };

  return (
    <div enctype="multipart/form-data">
      <h1>UploadImage</h1>
      <label>Enter the image name</label>
      <input
        type="text"
        onChange={(e) => {
          setFileName(e.target.value);
        }}
      />
      <label>Upload Image</label>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={uploadImageHandler}>Upload</button>
    </div>
  );
}

export default UploadImage;
