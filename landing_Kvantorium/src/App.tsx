import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './ui/Header/1/Header'
import Footer from './ui/Footer/1/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer></Footer>
    </>
  )
}

export default App
