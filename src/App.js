import React, { useState } from 'react';
import './App.css';

function App() {
  // State hook - "useState" is a hook that allows you to have state variables in functional components
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // Helper function to add an item to the list
  function addItem() {
    if (!newItem) {
        alert("Please enter a value")
        return;
    }
    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem
    }
    setItems(oldList => [...oldList, item]);
    setNewItem('');
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
        {/* 1. header */}
        <h1>Todo List App</h1>
        {/* 2.input (input and button) */}
        <input
            type="text"
            placeholder="Add an item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
        {/* 3. list of items (unordered list with list items) */}
        <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>x</button></li>
                )
            })}
        </ul>
    </div>
  );
}

export default App;
