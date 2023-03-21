import React, { useState } from "react";
import styles from "./PackedItems.module.css";
import { AiOutlineDelete } from "react-icons/ai";

function PackedItems({ items, togglePacked, removeItem }) {
  const [searchInput, setSearchInput] = useState("");
  const handleToggle = (index) => {
    togglePacked(index);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div className={styles.packed}>
      <h4>Packed Items</h4>
      <input
        type="text"
        placeholder="Filter inside the packed items"
        value={searchInput}
        onChange={handleSearch}
      />
      <ul>
        {items.map(
          (item, index) =>
            item.packed &&
            item.name.toLowerCase().includes(searchInput.toLowerCase()) && (
              <li key={index}>
                <input
                  checked={item.packed}
                  type="checkbox"
                  onChange={() => handleToggle(index)}
                />
                <span className={styles.info}> {item.name}</span>
                <span className={styles.price}>{item.price}$</span>
                <button onClick={() => removeItem(item)}>
                  {" "}
                  <AiOutlineDelete className={styles.deleteIcon} />
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default PackedItems;
