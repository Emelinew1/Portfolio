import './navbar.css';
import Logo from '../../atoms/logo/logo.jsx'

const Navbar = () => {

  return (
    <nav id="nav">
      <Logo />
      <h1 className='sr-only'>Emeline Wulstecke - Portfolio</h1>
      <section>
      <ul className='list'>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio </li>
        <li>Contact</li>
      </ul>
      <ul>
        <li><i className="fa-brands fa-linkedin"></i></li>
        <li><i className="fa-brands fa-github"></i></li>
      </ul>
      </section>
    </nav>
  )
}

export default Navbar;