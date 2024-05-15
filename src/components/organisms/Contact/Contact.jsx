import './contact.css';
import Form from '../../molecules/Form/Form';
import infoImg from '../../../assets/img/info.webp';

const Contact = () => {

    return (
        <div id='contact'>
            <img loading='lazy' src={infoImg} alt='image avec un ordinateur et un télèphone'></img>

            <section className='contact'>
                <h2>Me contacter</h2>
                <Form />
            </section>
        </div>
    )
};

export default Contact