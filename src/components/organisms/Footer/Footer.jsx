import './footer.css';
import Link from '../../atoms/link/Link';
import data from '../../../assets/data.json';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <h3> Emeline Wulstecke</h3>
            <ul>
                <li><a href={`mailto:${data.email.url}`}><i className={data.email.icon}></i></a></li>
                {data.links.map((link, index) => (
                    <li key={index}><Link url={link.url} content={<i className={link.icon}></i>} /></li>
                ))}

            </ul>
            <p>© {currentYear} || Tous droits réservés</p>
        </footer>
    )
}

export default Footer;
