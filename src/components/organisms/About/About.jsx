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
                    <Button text="Qui suis-je ?" onClick={openModal} />
                </figcaption>
            </figure>

            {modalOpen && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <article id='modal'>
                        <h3>Qui suis-je?</h3>
                        <figure>
                            <img src={Fleur} alt="dessin d'une fleur" />
                            <figcaption>
                                Hello moi c'est Emeline et je réside à Lille. Maman d'une fille merveilleuse & passionnée de voyages. Anciennement photographe, j'ai eu le privilège de saisir des instants uniques, des récits et des émotions à travers l'objectif de mon appareil. À l'âge de 32 ans, j'ai entrepris une nouvelle aventure en plongeant dans le monde du développement web. Pour moi, chaque ligne de code représente une nouvelle destination à explorer, une nouvelle histoire à écrire.

                                C'est ainsi que je me suis engagée dans une formation intensive sur OpenClassrooms, où j'ai acquis des compétences pour façonner des interfaces et créer des expériences utilisateur captivantes en jouant avec les couleurs et les formes.

                                Je suis à la recherche d'un poste de développeuse web junior qui me permettra de continuer à apprendre et à évoluer professionnellement dans un environnement dynamique et stimulant. Je suis convaincue que le développement web est un domaine où l'apprentissage est infini, chaque projet représentant une nouvelle opportunité. J'ai hâte de découvrir de nouvelles techniques et de contribuer pleinement à chaque mission qui me sera confiée. Je suis prête à apporter ma créativité et ma passion, et je recherche une équipe où règne un esprit de collaboration, permettant à chacun de s'épanouir et de s'exprimer librement.
                            </figcaption>
                        </figure>
                    </article>
                </Modal>
            )}
        </section>
    );
}

export default About;
