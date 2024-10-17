import React, {useState} from "react";

const Hooks = () => {
    // first thing inside of your component
    let [count, setCount] = useState(0);


    // LIMITATIONS OF USING VARIABLE AS STATES IN REACT
    // let count = 0;

    const updateCount = () => {
        setCount(count++)
        // 0 + 1 =1=count
    }

    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={updateCount}>ADD 1</button>
        </div>
    )
}
export default Hooks