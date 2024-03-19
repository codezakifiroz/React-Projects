import React, { useState } from 'react'
import '../App.css'

function Input(props) {

    let [valueofInput, setVal] = useState("")

    const addTask = () => {

        props.addNewTask(valueofInput)
        setVal("")
    }

    const setInputValue = (e) => {
        setVal(e.target.value)
    }
    return (
        <div className="mt-[2rem] w-full border-black">
            <input type="text"
                value={valueofInput}
                onChange={setInputValue}
                className='rounded-[0.5rem] w-[23rem] h-[3rem] p-[1rem]'
            />
            <input type="submit" value="+"
                onClick={addTask}
                className='bg-red-500 w-[3rem] h-[3rem] ml-[1rem] text-white p-[0.1rem] rounded-[0.5rem] text-[1.5rem] font-semibold'
            />
        </div>
    )
}

export default Input