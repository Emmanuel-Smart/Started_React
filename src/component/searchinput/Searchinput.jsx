import React, { useState } from "react";
import './search.css'

const SearchInput = () => {
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)

    const handleInputChange = (e) => {
        // alert(e.target.value)
        console.log(e.target.value)
        setValue(e.target.value)
    }

    const handleClear = () => {
        setValue("")
        setShow(false)

    }

    const handleShow = () => {
        setShow(true)
    }
    return (
        <div className="search">
            <input type="text" onChange={handleInputChange} value={value} />
            {show ? (<p style={{ color: 'white', backgroundColor: '#333' }} className="par">{value}</p>) : (<></>)}


            {/* button that clears value */}
            <button onClick={handleClear}>Clear Me</button>
            <button onClick={handleShow}>Show</button>


        </div>
    )
}

export default SearchInput