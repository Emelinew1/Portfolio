import './banner.css'
import bannerImg from '../../../assets/img/banner.webp'


const Banner = () => {
    return (
        <section id="banner">
            <div>
                <h1>{'WELCOME TO'.toUpperCase()}<br />{'MY PORTFOLIO'.toUpperCase()}</h1>
                <p>By Emeline</p>
            </div>
                <figure>
                    <img src={bannerImg} alt="image design avec la phrase Welcome to my portfolio" loading='lazy'></img>
                </figure>
        </section>
    )
}

export default Banner;