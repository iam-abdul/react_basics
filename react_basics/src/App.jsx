import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let normalCount = 10;
function App() {
  const [count, setCount] = useState(50)

  const incNormalCount = () => {
    normalCount += 1
    console.log("i clicked on inc normal count")
  }
  console.log("you clicked on normal count, now the count is ", normalCount)

  const incCountHook = () => {
    setCount(previousValue => previousValue + 1)
  }

  console.log("use state count is ", count)
  return (
    <>
      <div>test</div>
      <div>Normal count : {normalCount}</div>
      <div>Count from use state: {count}</div>

      <button onClick={incNormalCount}>normal js</button>
      <button onClick={incCountHook}>usestate click</button>

    </>
  )
}

export default App
