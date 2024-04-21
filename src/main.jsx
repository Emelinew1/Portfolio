import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Navbar from './components/organisms/Navbar/Navbar'
import Banner from './components/molecules/Banner/Banner'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
 
  </React.StrictMode>,
)
