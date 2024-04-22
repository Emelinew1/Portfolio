import './banner.css'
import bannerImg from '../../../assets/img/banner.webp'


const Banner = () => {
    return (
        <figure id= "banner">
            <img src={bannerImg} alt="image design avec la phrase Welcome to my portfolio" loading='lazy'></img>
        </figure>
    )
}

export default Banner;