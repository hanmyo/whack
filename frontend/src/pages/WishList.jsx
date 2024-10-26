import { useState, useEffect } from "react";
import "../styles/WishList.css"

function WishList() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: "$20" },
        { id: 2, name: "Product 2", price: "$35" },
        { id: 3, name: "Product 3", price: "$50" },
        { id: 4, name: "Product 4", price: "$25" },
        { id: 5, name: "Product 5", price: "$40" },
        { id: 6, name: "Product 6", price: "$15" },
        // Add more products as needed
    ]);
    return (
        <div className="top-container">
            <div className="NavBar">
                 <h1 className="title">WishList</h1>
           </div>

           <div className="List">
            {products.map((product)=>(
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                </div>
            ))}
           </div>
        </div>
    );
}

export default WishList;