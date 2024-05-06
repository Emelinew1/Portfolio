import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import './components/atoms/color/color.css'
import './components/atoms/police/police.css'
import Banner from './components/molecules/Banner/Banner'
import Navbar from './components/organisms/Navbar/Navbar'
import About from './components/organisms/About/About'
import Skills from './components/organisms/Skills/Skills'
import Portfolio from './components/organisms/Portfolio/Portfolio'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <About/>
    <Portfolio/>
    <Skills/>
  </React.StrictMode>,
)
