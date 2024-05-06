import './about.css';
import AboutImg from '../../../assets/img/about.webp';
import Button from '../../atoms/Button/Button';

const About = () => {
    return (
        <section id='about'>
            <h2>About me</h2>
            <figure>
                <img src={AboutImg} alt="image avec des photos de profil de face et de dos d'Emeline" />
                <figcaption>
                    <Button text="Who I am ?" />
                </figcaption>
            </figure>
        </section>
    );
}

export default About;
