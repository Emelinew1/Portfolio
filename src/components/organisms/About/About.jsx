import './about.css';
import { useState } from 'react';
import AboutImg from '../../../assets/img/about.webp';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';
import Fleur from '../../../assets/img/fleur.webp';

const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id='about'>
            <h2>About me</h2>
            <figure>
                <img src={AboutImg} alt="image avec des photos de profil de face et de dos d'Emeline" />
                <figcaption>
                    <Button text="Who I am ?" onClick={openModal} />
                </figcaption>
            </figure>

            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <article id='modal'>   
                        <h3>Who I am ?</h3>
                        <figure>
                            <img src={Fleur} alt="dessin d'une fleur" />
                            <figcaption>
                                Hello, I'm Emeline, a junior web integrator/developer with a passion for travel. Formerly a photographer, I captured moments, stories, and emotions through the lens of my camera. At 32, I embarked on a new adventure, a dive into the world of web development, where every line of code is a new destination to explore, a new story to write.<br /><br />
                                That's why I was drawn towards an intense training course on OpenClassrooms, where I learned how to model interfaces, play with colors, and shapes to create captivating user experiences.<br /><br />
                                I am looking for a job where I can continue to learn and grow professionally, in a dynamic and stimulating environment. Convinced that web development is a field where learning is endless and each project an opportunity, I am ready to fully commit and bring my creativity and enthusiasm to every task. I am looking for a team where a spirit of collaboration prevails, allowing everyone to flourish and express themselves freely.
                            </figcaption>
                        </figure>
                    </article>
                </Modal>
            )}
        </section>
    );
}

export default About;
