import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="bodyContact">
            <div className="contactForm">

                    <div className="form">
                        <span className="formTitle textTitle">Contáctanos</span>

                        <div className="formBody">
                        
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" placeholder="Escribe tu nombre con tu apellido"/>
                                
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" id="email" placeholder="ejemplo@mail.com"/>

                                <label htmlFor="msg">Mensaje</label>
                                <input type="text" id="msg" placeholder="Dejanos tu mensaje"/>

                                <div className="button btn-f-v sendForm">
                                    Enviar
                                </div>
                        </div>
                    </div>

            </div>
            <div className="contactImage"></div>
        </div>
    )
}
