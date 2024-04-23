import './skills.css';
import data from '../../../assets/data.json';
import Link from '../../atoms/link/Link';

const Skills = () => {
    return (
        <article id='skills'>
            <h2>My skills</h2>
            <ul>
                {data.skills.map((skill, index) => (
                    <li key={index}>
                        <Link url={skill.url} content={
                            <figure>
                                <img src={skill.img} alt={skill.alt} />
                                <figcaption>{skill.name}</figcaption>
                            </figure>
                        } />
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default Skills;