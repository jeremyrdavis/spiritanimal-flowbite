import { useState } from 'react'
import { Button } from "flowbite-react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button>Click me</Button>
    </>
  )
}

export default App