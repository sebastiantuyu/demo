import '../styles/Profile.css';
import PropsCarrusel from '../components/PropsCarrusel.js';

export default function Profile() {

    return (
        <div className="profileContainer">
                <div className="profHeader">
                    <div className="profPic">
                        <img src="" alt="" />
                    </div>
                    <div className="profName">
                        Rosa Jimenez
                    </div>

                    <span className="textTitSecond propTit">Mis propuestas</span>
                </div>

                <div className="profContent">
                    <div className="profCarr">
                        <PropsCarrusel number={3} header={""}/>
                    </div>   
                </div>
        </div>
    )
}