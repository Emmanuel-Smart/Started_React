import React from "react";


const State =  () => {
    const isDone = true;
    const textDecoration = {textDecoration:'line-through'};
    return(
        <div>
            <h1 style={isDone ? textDecoration : null}> WELCOME TO STATE</h1>
            <ul>
                <li style={isDone ?  textDecoration  : null}>Product1</li>
            </ul>
        </div>
    );

};

export default State;