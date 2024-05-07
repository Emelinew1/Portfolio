import React, { useState } from 'react';
import './carrousel.css';
import { portfolio } from '../../../assets/data.json';
import Card from '../Card/Card';
import Modal from '../Modal/Modal'; // Assurez-vous d'importer correctement le composant Modal

const Carrousel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="portfolio">
            {portfolio.map((project, index) => (
                <Card key={index} project={project} onCardClick={() => openModal(project)} />
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* Contenu de votre modal, utilisez selectedProject pour afficher les informations */}
            </Modal>
        </div>
    );
};

export default Carrousel;
