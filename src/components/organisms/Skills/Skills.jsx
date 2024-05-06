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
            <p>I look forward to applying my acquired skills to exciting projects and continuing to learn and grow in this stimulating field.
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
                                        <img src={skill.img} alt={skill.alt} />
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
                                        <img src={skill.img} alt={skill.alt} />
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
