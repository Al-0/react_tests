"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState(null);
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet.</p>}
          {pickImage && <Image src={pickImage} alt="Custom image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
