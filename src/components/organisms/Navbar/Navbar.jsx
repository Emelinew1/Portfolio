import './navbar.css';
import Logo from '../../atoms/logo/logo.jsx'
import Link from '../../atoms/link/Link.jsx';
import data from '../../../assets/data.json'

const Navbar = () => {

  return (
    <nav id="nav">
      <Logo />
      <h1>Work with me</h1>
      <section>
      <ul className='list'>
        <li><a href="#about">About me</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li>Portfolio </li>
        <li>Contact</li>
      </ul>
      <ul>
          {data.links.map((link, index) => (
            <li key={index}><Link url={link.url} content={<i className={link.icon}></i>} /></li>
          ))}
        </ul>
      </section>
    </nav>

  )
}

export default Navbar;