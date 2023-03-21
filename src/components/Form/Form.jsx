import React, { useState } from "react";
import styles from "./Form.module.css";
function Form() {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);

  const handleOnchangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleOnchangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleOnchangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    calculateBMR(gender);
  };
  const calculateBMR = (g) => {
    if (g === "male") {
      const bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      setResult(bmr);
    } else if (g === "female") {
      const bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      setResult(bmr);
    }
  };
  return (
    <div>
      <h1>BMR Calculator</h1>
      <form onSubmit={handleOnSubmit}>
        Gender:
        <select
          value={gender}
          id=""
          placeholder="Genders"
          onChange={handleOnchangeGender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          value={height}
          placeholder="Centimeters"
          type="number"
          onChange={handleOnchangeHeight}
        />
        <input
          value={weight}
          type="text"
          placeholder="Kilograms"
          onChange={handleOnchangeWeight}
        />
        <input
          value={age}
          type="text"
          placeholder="Age"
          onChange={handleOnchangeAge}
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <strong>Result = </strong>
        {result}
      </div>
    </div>
  );
}

export default Form;
