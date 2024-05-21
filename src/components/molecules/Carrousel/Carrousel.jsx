import './carrousel.css';
import React, { useState } from "react";
import Slider from "react-slick";
import { portfolio } from '../../../assets/data.json';
import Card from '../Card/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal/Modal';
import Link from '../../atoms/link/Link';
import Button from '../../atoms/Button/Button';

function Carrousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 3,
    speed: 500
  };

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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {portfolio.map((project) => (
          <Card
            key={project.id}
            project={project}
            onCardClick={() => openModal(project.id)}
          />
        ))}
      </Slider>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <article className="modal-carrousel">
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.texte}</p>
            <b>{selectedProject.title}</b>
            <ul>
              {Object.keys(selectedProject)
                .filter(key => key.startsWith('objectif'))
                .map(key => (
                  <li key={key}>{selectedProject[key]}</li>
                ))}
            </ul>
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
}

export default Carrousel;