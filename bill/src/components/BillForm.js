// src/components/BillForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BillForm = () => {
    const [items, setItems] = useState([{ name: '', quantity: '', cost: '' }]);
    const [totalCost, setTotalCost] = useState(0);

    const handleChange = (index, e) => {
        const values = [...items];
        values[index][e.target.name] = e.target.value;
        setItems(values);
    };

    const handleAddItem = () => {
        setItems([...items, { name: '', quantity: '', cost: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/calculate', items);
        setTotalCost(response.data.totalCost);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {items.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(e) => handleChange(index, e)}
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e) => handleChange(index, e)}
                        />
                        <input
                            type="number"
                            name="cost"
                            placeholder="Cost per Item"
                            value={item.cost}
                            onChange={(e) => handleChange(index, e)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddItem}>Add Item</button>
                <button type="submit">Calculate Total</button>
            </form>
            <h2>Total Cost: ${totalCost}</h2>
        </div>
    );
};

export default BillForm;
