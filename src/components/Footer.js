import '../styles/Footer.css';
import SocialBanner from './SocialBanner.js';


export default function Footer(data) {
    let avoid = false
    // eslint-disable-next-line
    if(data["avoid"]) {
        data["avoid"].forEach(element => {
            console.log(window.location.pathname)
            if(element == window.location.pathname.split("/")[1])
            { avoid = true  } 
        });
    }
    if(!avoid)
    {
    return (
       <section className="footer">
           <div className="foot">
                <div className="fDescription">
                    <div className="desCont">
                        Somos una comunidad líder que hará 
                        realidad las propuestas de mejora 
                        hechas por ciudadanos ejemplares.
                    </div>

                    <SocialBanner />
                </div>

               <div className="footerItem">
                   <span className="footerTitle">Ciudadano ejemplar</span>
                   <ul>
                       <li>Ecología</li>
                       <li>Salud</li>
                       <li>Animales</li>
                       <li>Economia</li>    
                       <li>Areas publicas</li>
                       <li>Accesibilidad</li>
                       <li>Artes y expresión</li>
                   </ul>
               </div>

               <div className="footerItem">
                   <span className="footerTitle">Explora</span>
                   <ul>
                       <li>Acerca de nosotros</li>
                       <li>Registrate</li>
                       <li>Todas las propuestas</li>
                   </ul>
               </div>

                <div className="footerItem">
                    <span className="footerTitle">Contacto</span>

                    <ul>
                        <li>Telefonos</li>
                        <li>Correos</li>
                    </ul>
                </div>
           </div>
       </section>
    )
    } else {return <></>}

}
