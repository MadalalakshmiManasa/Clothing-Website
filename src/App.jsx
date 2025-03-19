import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryNav from './Compnents/CategoryNav'
import Header from './Compnents/Header'
import Banner from './Compnents/Banner'
import Newsletter from './Compnents/Newsletter'
import ProductCards from './Compnents/ProductCards'
import Footers from './Compnents/Footers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <CategoryNav/>
    <Banner/>
    <ProductCards/>
    <Newsletter/>
    <Footers/>
    </>
  )
}

export default App








