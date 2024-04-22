import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import './components/atoms/color/color.css'
import './components/atoms/police/police.css'
import Banner from './components/molecules/Banner/Banner'
import Navbar from './components/organisms/Navbar/Navbar'
import About from './components/organisms/About/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <About/>
  </React.StrictMode>,
)
