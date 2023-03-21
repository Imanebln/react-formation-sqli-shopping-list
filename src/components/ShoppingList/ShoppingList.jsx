import React, { useState } from "react";
import UnpackedItems from "../Items/UnpackedItems";
import PackedItems from "../Items/PackedItems";
import styles from "./ShoppingList.module.css";
import { BsPlus } from "react-icons/bs";

function ShoppingList() {
  const [items, setItems] = useState([
    { name: "item1", price: 100, packed: false },
    { name: "item2", price: 300, packed: true },
    { name: "item3", price: 100, packed: false },
  ]);
  const [item, setItem] = useState({ name: "", price: 0, packed: false });

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, item]);
  };
  const removeItem = (item) => {
    setItems(items.filter((i) => i.name !== item.name));
  };
  const togglePacked = (index) => {
    const newItems = [...items];
    newItems[index].packed = !newItems[index].packed;
    setItems(newItems);
  };
  const unpackAllItems = () => {
    setItems(items.map((i) => ({ ...i, packed: false })));
  };
  const totalPackedItemsPrice = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.packed) {
        total += item.price;
      }
    });
    return total;
  };
  return (
    <div className={styles.shopingCart}>
      <div className={styles.container}>
        <h1>Add Product</h1>
        <form onSubmit={addItem}>
          <input
            value={item.name}
            type="text"
            placeholder="Product"
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <input
            value={item.price}
            type="number"
            placeholder="Price"
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
          <button type="submit">
            <BsPlus className={styles.addBtn} />
          </button>
        </form>
        <div className="unpacked-items">
          <UnpackedItems
            items={items}
            togglePacked={togglePacked}
            removeItem={removeItem}
          />
        </div>
        <div className="packed-items">
          <PackedItems
            items={items}
            togglePacked={togglePacked}
            removeItem={removeItem}
            unpackAllItems={unpackAllItems}
          />
        </div>
        <p>
          Total Price:{" "}
          <strong>
            {items
              .filter((item) => item.packed === true)
              .reduce((total, item) => total + item.price, 0)}
            $
          </strong>
        </p>
      </div>
    </div>
  );
}

export default ShoppingList;
