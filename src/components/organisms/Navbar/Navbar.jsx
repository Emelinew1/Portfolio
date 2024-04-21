import './navbar.css'; 
import Logo from '../../atoms/logo/logo.jsx'

const Navbar = () => {

    return (
      <nav id="nav">
        <Logo/>
       <h1 className='sr-only'>Emeline Wulstecke - Portfolio</h1>
       <ul>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio </li>
        <li>Contact</li>
       </ul>
      </nav> 
    )
  }
  
  export default Navbar;