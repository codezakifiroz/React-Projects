import { useState } from 'react'
import Input from './Component/Input'
import Output from './Component/Output'


import './App.css'

function App() {

  let [items, setTask] = useState([])

  const addNewTask = (task) => {
    let newTaskArr = [...items, task]
    setTask(newTaskArr)
  }

  return (
    <>
      <div className='w-[35rem] h-[40rem] bg-cyan-300 m-auto rounded-[1rem] mt-[5rem] p-[4rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' >

        <h1 className='w-full text-center text-4xl font-bold'
        >TO-DO</h1>
        <Input addNewTask={addNewTask} />
        <Output list={items} />
      </div>

    </>
  )
}

export default App
