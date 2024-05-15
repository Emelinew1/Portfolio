import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Banner from './components/molecules/Banner/Banner'
import Navbar from './components/organisms/Navbar/Navbar'
import About from './components/organisms/About/About'
import Skills from './components/organisms/Skills/Skills'
import Portfolio from './components/organisms/Portfolio/Portfolio'
import Footer from './components/organisms/Footer/Footer'
import Contact from './components/organisms/Contact/Contact'
import ScrollToTop from './components/atoms/Scroll/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <ScrollToTop/>
    <Footer/>
  </React.StrictMode>,
)
