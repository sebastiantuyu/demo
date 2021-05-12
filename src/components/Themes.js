import '../styles/Themes.css';
import themesList from './ThemesList.js';


const themes = themesList

export default function Themes(data) {
    let all_ = document.getElementsByClassName("themeBody")
    if(data["context"]){
        var {theme_,setTheme_} = data["context"]
    } 
    
    function click(id){
        for(let i=0;i<all_.length;i++){all_[i].classList.remove("activeTheme")}
        all_[id-1].classList.add("activeTheme")
        setTheme_(id)        
    }
    

    return (
    <span className="themeBody"
                    onClick={   data["activeTheme"] ?
                                ()=>{click(data["id"])}
                                : " "
                            }
                    key={data["id"]}
                    data-id={data["id"]}>
        <span className="themeIcon">
            <img src={themes[data["id"]].logo} alt="" />
        </span> 
        <span>{ data["activeTheme"] ?
                themes[data["id"]].short ? themes[data["id"]].short : themes[data["id"]].name
                : themes[data["id"]].name                
               }</span>
    </span>
    )
}
