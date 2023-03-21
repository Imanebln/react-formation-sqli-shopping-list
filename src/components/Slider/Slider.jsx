import React, { useState } from "react";
import Slide from "../Slide/Slide";
import styles from "./Slider.module.css";
export const CONTENT = ["First", "Second", "Third"];
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidePrevContent = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };
  const slideNextContent = () => {
    if (slideIndex < CONTENT.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className={styles.container}>
      <Slide styles={styles} content={CONTENT} slideIndex={slideIndex} />
      <div className={styles.btns}>
        <button className={styles.btn} onClick={slidePrevContent}>
          Prev
        </button>
        <button className={styles.btn} onClick={slideNextContent}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
