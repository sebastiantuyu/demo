import '../styles/Profile.css';
//import { profpic } from '../styles/sources/profpic.png'
import Proposal from './Proposal.js'

const def = ["1","2","3"]

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
                        {
                           def.map(obj => <Proposal />)
                        }
                    </div>   
                </div>
        </div>
    )
}