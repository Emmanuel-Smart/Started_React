import React, { useEffect, useState } from "react";


const LearnState = () => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState('seed')

    // useEffect
    useEffect(() => {
        console.count('useEffect running')
        document.title = `you clicked ${count} times`
    }, [count])
    console.log('Components runs')

    return(
        <div>
            <h1>you clicked {count} times</h1>
            <button onClick={() => {setCount(prev => prev + 1)}}>increase</button>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              {name}
        
        
        </div>
    )
}

export default LearnState