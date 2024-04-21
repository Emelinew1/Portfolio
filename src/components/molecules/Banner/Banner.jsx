
import bannerImg from '../../../assets/banner.webp'


const Banner = () => {
    return (
        <figure id= "banner" loading="lazy">
            <img src={bannerImg} alt="image design avec la phrase Welcome to my portfolio"></img>
        </figure>
    )
}

export default Banner;