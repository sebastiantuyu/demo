import '../styles/Proposal.css';
import Themes from './Themes.js';
import Reactions from './Reactions';

export default function Proposal(data) {
    return(
        <div className="cProp">
            <div className="cPropHeader"></div>
            <div className="cPropBody">

              <Themes id={data["themes"]}/>  

                <span className="cPropTitle">
                    Más  espacios recreativos para artistas urbanos
                </span>
                <span className="cPropContent">
                    Esta investigación explica el vínculo del espacio público 
                    recreativo y sus usuarios; su diseño y planeación no 
                    sólo es un problema técnico, sino una actividad
                </span>
            </div>
            <div className="cPropReactions">
                <div className="reactContainer">
                    <Reactions likes={3} noLikes={2} comments={1}/>
                </div>
            </div>
        </div>
    )
}