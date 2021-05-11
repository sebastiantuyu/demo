import '../styles/Comment.css'
import UserInfo from './UserInfo'

export default function Comment(data) {
    return (
        <div className="comment">
            <div className="cProf">
                <UserInfo name={data["name"]}/>
            </div>
            <div className="cContent">
                {
                    data["content"]
                }
            </div>
        </div>
    )
}
