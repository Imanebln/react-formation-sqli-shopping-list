import React from "react";

function Slide({ styles, slideIndex, content }) {
  return (
    <>
      <div className={styles.slide}>{content[slideIndex]}</div>
    </>
  );
}

export default Slide;
