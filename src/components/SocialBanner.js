import '../styles/SocialBanner.css';
import {faFacebookF,
    faInstagram,
    faLinkedin,
    faSkype,
    faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function SocialBanner() {
    return (
        <div className="social-banner">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSkype} />
        </div>
    )
}
