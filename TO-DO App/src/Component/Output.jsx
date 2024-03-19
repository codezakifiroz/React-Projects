import React from 'react'
import '../App.css'

export default function Output(props) {


    return (
        <div className="bg-pink-200 w-full rounded-[1rem] mt-[2rem] h-[23rem] p-[1rem] overflow-auto overflow-x-hidden">
            <ul>
                {props.list.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
    )
}
