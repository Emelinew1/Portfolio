import React, { useState } from 'react';
import './carrousel.css';
import { portfolio } from '../../../assets/data.json';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Link from '../../atoms/link/Link'; 
import Button from '../../atoms/Button/Button';

const Carrousel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const openModal = (projectId) => {
        setSelectedProjectId(projectId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProjectId(null);
    };

    // Fonction pour récupérer les détails du projet à partir de son identifiant
    const getProjectById = (projectId) => {
        return portfolio.find(project => project.id === projectId);
    };

    const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

    return (
        <div className="portfolio">
            {portfolio.map((project) => (
                <Card key={project.id} project={project} onCardClick={() => openModal(project.id)} />
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedProject && (
                    <article className='modal-carrousel'>
                        <h3>{selectedProject.name}</h3>
                        <p>{selectedProject.texte}</p>
                        <div>
                        <Link url={selectedProject.url} content={<Button text="Site" />} />
                        {selectedProject.github && (
                            <Link url={selectedProject.github} content={<Button text="Code" />} />
                        )}
                        </div>
                    </article>
                )}
            </Modal>
        </div>
    );
};

export default Carrousel;
