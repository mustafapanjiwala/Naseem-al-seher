import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LuxuryPerfumeWebsite from './LuxuryPerfumeWebsite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LuxuryPerfumeWebsite />
    </>
  )
}

export default App
