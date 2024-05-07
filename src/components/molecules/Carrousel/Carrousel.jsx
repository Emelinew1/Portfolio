import React, { useState, useEffect } from 'react';
import './carrousel.css';
import { portfolio } from '../../../assets/data.json';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Link from '../../atoms/link/Link';
import Button from '../../atoms/Button/Button';

const Carrousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  const getProjectById = (projectId) => {
    return portfolio.find((project) => project.id === projectId);
  };

  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolio.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolio.length) % portfolio.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 767) {
      setCardsPerSlide(1);
    } else if (screenWidth < 1024) {
      setCardsPerSlide(2);
    } else {
      setCardsPerSlide(3);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="carrousel">
      <button onClick={prevSlide} className="prev">
        {'<'}
      </button>
      <div className="carrousel-container">
        {[...portfolio, ...portfolio.slice(0, cardsPerSlide - 1)]
          .slice(currentIndex, currentIndex + cardsPerSlide)
          .map((project, index) => (
            <Card
              key={project.id}
              project={project}
              onCardClick={() => openModal(project.id)}
              className={index === currentIndex % cardsPerSlide ? 'active' : ''}
            />
          ))}
        <div className="dots">
          {portfolio.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex % portfolio.length ? 'dot active' : 'dot'}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <article className="modal-carrousel">
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
      <button onClick={nextSlide} className="next">
        {'>'}
      </button>
    </div>
  );
};

export default Carrousel;
