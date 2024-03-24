import './App.css'
import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charcter, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)


  const getPassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) string += "0123456789";
    if (charcter) string += "~!@#$%^&*()_+{}?"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char);
    }


    setPassword(pass);
  }, [length, number, charcter, setPassword])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()

  }, [password])

  useEffect(() => {
    getPassword()
  }, [length, number, charcter, setPassword])
  return (
    <>
      <h1 className='w-full text-3xl p-5 bg-[#FF71CD] text-white font-bold'
      >Password Generator</h1>
      <div className='w-full h-auto flex flex-col mt-28  items-center' >

        <div className='w-1/3 h-16 flex rounded-full border-[#8B93FF] border overflow-hidden'>
          <input
            type="text"
            value={password}
            readOnly
            className='w-full bg-transparent px-5 text-black focus:outline-none'
            ref={passwordRef}
          />
          <button
            className='rounded-full w-1/3 text-white bg-[#8B93FF] text-lg font-bold'
            onClick={copyPassword}
          >Copy</button>
        </div>
        <div className=' flex w-1/3 mt-8 gap-2 justify-center'>
          <div className='flex align-middle'>

            <input type="range"
              min={6}
              max={100}
              defaultValue={length}
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label className='ml-5'
            >Length({length})</label>
          </div>
          <div className='flex gap-2'>

            <input type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex gap-2'>

            <input type="checkbox"
              defaultChecked={charcter}
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
            />
            <label>Charactor</label>
          </div>
        </div>

      </div >
    </>
  )
}

export default App
