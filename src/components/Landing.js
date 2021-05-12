import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropsCarrusel from './PropsCarrusel.js'
import "../styles/Landing.css";

export default function Landing() {
  return (
    <>
      <section className="mainSection">
        <div className="mainTitle">
          <div className="titleContent">
            <span className="textRemark">Construyamos un mejor Cancún</span>
            <span className="textTitle">Haz una propuesta para lograrlo</span>

            <span className="textContent titleDesc">
              Juntos lograremos un lugar un Cancún ejemplar, escuchemos las
              propuestas de los ciudaddanos y hagamos que suceda.
            </span>

            <div className="buttonSection">
              <div className="button btn-f-v">Hacer propuesta</div>

              <div className="button btn-border-v">Conocer propuestas</div>
            </div>
          </div>
        </div>
        <div className="mainImage"></div>
      </section>

      <section className="themesProps">
        <div className="themesTitle">
          <span className="textTitSecond themeTit">
            Estos son los temas para mejorar a Cancún
          </span>
          <span className="textContent themeSubs">
            Complementa, opina y vota por la propuesta correcta
          </span>
        </div>

        <div className="themesAll">
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
          <div className="theme"></div>
        </div>
      </section>

      <section className="aboutUs">
            <div className="parPhoto"></div>
            <div className="parTitle">
                <span className="textTitSecond">¿Por qué participar?</span>
                <span className="textContent">
                    Ejerce tus derechos como ciudadano 
                    y da el siguente paso para una ciudad ejemplar. 
                </span>

                <span>
                    Ver más acerca de nosotros 
                </span>

                <div className="button btn-f-v makeUser">
                    <span>Crear usuario</span>
                    <FontAwesomeIcon icon={faFacebookF} />                    
                </div>

            </div>
      </section>

      <section className="trendProps flex-column justify-content-center">
        <PropsCarrusel number={3} header={"Propuestas de los cuidadanos"} arrow={true}/>
      </section>
    </>
  );
}
