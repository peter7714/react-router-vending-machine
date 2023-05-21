import React from "react";
import { Link } from "react-router-dom";

function VendingMachine(){
    return (
        <div>
            <h1>Hello, I'm a Vending Machine. What would you like to eat?</h1>
            <ul>
                <li><Link to='/soda'>Soda</Link></li>
                <li><Link to='/chips'>Chips</Link></li>
                <li><Link to='/sardines'>Fresh Sardines</Link></li>
            </ul>
        </div>
    );
}

export default VendingMachine;