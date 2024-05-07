import './footer.css';
import Link from '../../atoms/link/Link';
import data from '../../../assets/data.json'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <p>© {currentYear} || Tous droits réservés </p>
            <ul>
            {data.links.map((link, index) => (
              <li key={index}><Link url={link.url} content={<i className={link.icon}></i>} /></li>
            ))}
          </ul>
        </footer>
    )
}

export default Footer;