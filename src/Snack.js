import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Snack({snack}){
    const [count, setCount] = useState(0)
    const consume = () => {
        setCount(count+1);
    }
    return (
        <div>
            <h2>{snack}</h2>
            <p>Amount Consumed: {count}</p>
            <button onClick={consume}>Consume!</button>
            <Link to='/'>
                <button>GO BACK</button>
            </Link>
        </div>
    )
}

export default Snack;