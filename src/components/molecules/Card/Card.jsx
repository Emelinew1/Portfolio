import React from 'react';
import './card.css';

const Card = ({ project, onCardClick, isActive }) => {
    const { image, alt, category, name } = project;

    return (
        <figure id="card" onClick={onCardClick} className={isActive ? 'active' : ''}>
            <img src={image} alt={alt} loading='lazy' />
            <figcaption>
                <h3>{name}</h3>
                <p>{category}</p>
            </figcaption>
        </figure>
    );
};

export default Card;
