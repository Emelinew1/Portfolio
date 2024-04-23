import React from 'react';
import './card.css';
import Link from '../../atoms/link/Link.jsx';

const Card = ({ img, url, alt, content }) => {
  return (
    <div className="card">
      <img src={img} alt={alt} />
      <figcaption>{content}</figcaption>
      <Link url={url} content="Learn More" /> {/* Utilisez votre composant Link pour rendre la carte cliquable */}
    </div>
  );
}

export default Card;
