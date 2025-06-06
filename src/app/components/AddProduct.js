'use client'

import { useState } from "react";

const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState('Leaf Rake');
    /*
        In class component, we use this.state, this.setState({}) to update component
        In functional Component we use useState

            name - '' <-> kind of similar to this.state = { name = "" }
            setName <-> kind of similar to this.setState({})
    */

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page refresh
        if (name.trim()) {
            onAdd(name); // calling onAdd props
            setName('');
        }
    }

    return (
        <div>
            <h1>This is Add Product Functional Component</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Product Name" maxLength="50" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;