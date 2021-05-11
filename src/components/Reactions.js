import '../styles/Reactions.css';
import happyFace from '../styles/sources/smile-face.svg'
import sadFace from '../styles/sources/sad-face.svg'
import chat from '../styles/sources/chat.svg'



export default function Reactions(data) {
    return (
        <div className="reactions">
                <div className="rHappy">
                    <div className="rIcon">
                        <img src={happyFace} alt="" />
                    </div>
                    <span>{data["likes"]}</span>
                </div>
                <div className="rSad">
                <div className="rHappy">
                    <div className="rIcon">
                        <img src={sadFace} alt="" />
                    </div>
                    <span>{data["noLikes"]}</span>
                </div>
                </div>
                <div className="rComment">
                <div className="rHappy">
                    <div className="rIcon">
                        <img src={chat} alt="" />
                    </div>
                    <span>{data["comments"]}</span>
                </div>
                </div>
        </div>
    )
}
