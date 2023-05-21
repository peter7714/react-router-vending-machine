import React from "react";
import { Link } from "react-router-dom";

function Sardines(){
    return(
        <div>
            <h1>DON'T EAT THE SARDINES, THEY EAT YOU! </h1>
            <Link to='/'>
                <button>GO BACK</button>
            </Link>
        </div>
    )
}

export default Sardines;