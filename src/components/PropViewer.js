import {useParams} from 'react-router-dom';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Tags from './Tags.js';
import Comment from './Comment.js'
import PropsCarrusel from './PropsCarrusel.js'
import '../styles/PropViewer.css';
import UserInfo from './UserInfo.js';

export default function PropViewer() {
    const param = useParams()
    return (
        <>
        <div className="pView">
            <div className="vHead"></div>
            <div className="vHeader"></div>
            <div className="vBody">

                <div className="vImage"></div>

                <div className="hTitle">
                    <div className="textTitSecond hT">
                        Más espacios recreativos para artistas urbanos
                    </div>
                    <span className="sIcon"> 
                        <FontAwesomeIcon icon={faShareAlt}/>
                        Compartir</span>
                </div>

                <div className="hUserInfo b-grey">
                    {/*<div className="info">
                        <div className="iPic">

                        </div>
                        <div className="iName">
                            Rosa Jimenez
                        </div>
                    </div>*/}
                    <UserInfo name={"Rosa Jimenez"}/>


                </div>

                <div className="hDescr b-grey">
                    <div className="hDesTit textTitSecond">
                        Descripción    
                    </div> 
                    <div className="hDesCont">
                        Los murales más antiguos, las pinturas rupestres,
                        datan del paleolítico superior, se encuentran en
                        cuevas, pintados sobre las paredes de roca con 
                        pigmentos naturales de plantas y minerales, y 
                        aglutinantes como la resina. Una concepción artística 
                        que tendría su continuidad quizá en la pintura sobre
                        muros y paredes, que predominó durante la antigüedad,
                        2​ y durante la época románica. Durante el Renacimiento
                        el arte mural evolucionó con la técnica al fresco —como los conservados en las Estancias del Vaticano y la Capilla Sixtina—, técnica que se mantuvo durante el Barroco y el Rococó, en ocasiones combinada con relieves de estuco.
                        <br /> <br />
                        Ya en el siglo xx, Occidente devolvió cierto protagonismo al arte mural pictórico con la obra de los muralistas de México y otros países de Hispanoamérica, entre ellos Diego Rivera, David Alfaro Siqueiros y José Clemente Orozco en México, Pedro Nel Gómez en Colombia, y Teodoro Núñez Ureta en Perú.
                    </div>
                </div>

                <div className="hTags b-grey">
                    <Tags name={"Ayuntamiento de Benito Juárez"}/>
                    <Tags name={"Casa de la cultura"}/>

                    <Tags name={"Insitituto de la cultura y las artes"}/>
                
                </div>    
                
                <div className="hComments">
                    <Comment name={"Maria Morelos"} content={"Los murales más antiguos, las pinturas rupestres, datan del paleolítico superior, se encuentran en cuevas, pintados sobre las paredes de roca con pigmentos naturales de plantas y minerales, y aglutinantes como la resina. Una concepción artística que tendría su continuidad quizá en la pintura sobre muros y paredes, que predominó durante la antigüedad,2​ y durante la época románica. Durante el Renacimiento el arte mural evolucionó con la técnica al fresco —como los conservados en las Estancias del Vaticano"}/>
                    <Comment name={"Maria Morelos"} content={"Los murales más antiguos, las pinturas rupestres, datan del paleolítico superior, se encuentran en cuevas, pintados sobre las paredes de roca con pigmentos naturales de plantas y minerales, y aglutinantes como la resina. Una concepción artística que tendría su continuidad quizá en la pintura sobre muros y paredes, que predominó durante la antigüedad,2​ y durante la época románica. Durante el Renacimiento el arte mural evolucionó con la técnica al fresco —como los conservados en las Estancias del Vaticano"}/>
                    <Comment name={"Maria Morelos"} content={"Los murales más antiguos, las pinturas rupestres, datan del paleolítico superior, se encuentran en cuevas, pintados sobre las paredes de roca con pigmentos naturales de plantas y minerales, y aglutinantes como la resina. Una concepción artística que tendría su continuidad quizá en la pintura sobre muros y paredes, que predominó durante la antigüedad,2​ y durante la época románica. Durante el Renacimiento el arte mural evolucionó con la técnica al fresco —como los conservados en las Estancias del Vaticano"}/>
                </div>   
        
            </div>
        </div>
        <PropsCarrusel number={3} header={"Más propuestas"} />
        </>
    )
}
