import { useState, useEffect } from "react";
import Info from "../components/info.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {Link} from "react-router-dom";
import "../styles/Home.css"

function Home() {
    
    return (
        <div className="main-container">
            <div className="wishlist-column">
            <Link to={"/wishlist"}> 
                <button className="wishlist-link-button">
                    WishList
                </button>
            </Link>
            </div>
            <div >
                <div className="Searchbox-and-button">
                    <h1>Bit by Bit</h1>
                    <div><SearchBar/></div>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Home;