import {Link} from 'react-router-dom';
import '../styles/SlideMenu.css';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SocialBanner from './SocialBanner';


export default function SlideMenu(change) {
    
    return (
        <>
        <div className="par-sMenu" onClick={change['change']} id="backMenu">
        </div>
        <div className="sMenu" id="sMenu">
            <div className="item">
            <a href="/">Inicio</a>
            </div>
            <div className="item">
            <a href="/contacto">Contacto</a>
            </div>
            <div className="item">
            <Link to="/crear-propuesta">Crear propuesta</Link>
            </div>
            <div className="item">
            <Link to="/perfil/propuestas">Mis propuestas</Link>
            </div>
            <div className="item">
                <span className="change">
                    ¿Quieres ser parte del cambio?
                </span>

                <div className="button btn-f-l social">
                    <span>Crear usuario</span>
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <SocialBanner />

            </div>

        </div>
        </>
    )
}
