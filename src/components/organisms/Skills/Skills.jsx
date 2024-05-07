import React from 'react';
import './skills.css';
import data from '../../../assets/data.json';
import Link from '../../atoms/link/Link';

const Skills = () => {

    const frontSkills = data.skills.filter(skill => skill.category === 'Front');
    const otherSkills = data.skills.filter(skill => skill.category === 'Autres');

    return (
        <article
            id='skills'>
            <h2>Skills</h2>
            <p> J'ai hâte d'appliquer mes compétences acquises à des projets passionnants et de continuer à apprendre et à évoluer dans ce domaine stimulant.
            </p>
            <div className="container">

                <div className="line"></div>

                <section>
                    <h3>Front-end</h3>
                    <ul>
                        {frontSkills.map((skill, index) => (
                            <li key={index}>
                                <Link url={skill.url} content={
                                    <figure>
                                        <img src={skill.img} alt={skill.alt} loading='lazy'/>
                                    </figure>
                                } />
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="line2"></div>

                <section>
                    <h3>More</h3>
                    <ul>
                        {otherSkills.map((skill, index) => (
                            <li key={index}>
                                <Link url={skill.url} content={
                                    <figure>
                                        <img src={skill.img} alt={skill.alt} loading='lazy'/>
                                    </figure>
                                } />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
}

export default Skills;
