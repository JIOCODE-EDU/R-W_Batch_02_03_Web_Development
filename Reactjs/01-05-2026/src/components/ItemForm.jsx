import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../redux/Action";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const itemData = { name, description };

    if (editingItem) {
      dispatch(updateItem({ id: editingId, ...itemData }));
      if (onCancel) onCancel();
    } else {
      dispatch(addItem(itemData));
    }
  };

  return (
    <>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="">Description</label>
        <input type="text" name="" id="" placeholder="Item Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div>
          <button type="submit">{editingItem ? "Update Item" : "Add Item"}</button>
          {
            editingItem && (
              <button type="button" onClick={onCancel}>cancel</button>
            )
          }
        </div>
      </form>
    </>
  );
};

export default ItemForm;
