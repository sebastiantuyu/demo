import '../styles/Themes.css';
import medAmb from '../styles/sources/themes/1.svg';
import salBin from '../styles/sources/themes/2.svg';
import Anim from '../styles/sources/themes/3.svg';
import Polit from '../styles/sources/themes/4.svg';
import Econ from '../styles/sources/themes/5.svg';
import ArPub from '../styles/sources/themes/6.svg';
import EspAcc from '../styles/sources/themes/7.svg';
import ArtExp from '../styles/sources/themes/8.svg';





 
const themes = {
    1:{
        name:"Medio Ambiente",
        logo:medAmb,
    },
    2:{
        name:"Salud y Bienestar",
        logo:salBin,
    },
    3:{
         name:"Animales",
         logo:Anim,
    },
    4:{
         name:"Politica",
         logo:Polit,
    },
    5:{
         name:"Economía",
         logo:Econ,
    },
    6:{
         name:"Áreas publicas",
         logo:ArPub,
    },
    7:{
         name:"Espacios con accesibilidad",
         logo:EspAcc,
         short:"Espacios",
    },
    8:{
         name:"Artes y Expresión",
         logo:ArtExp,
    },
}

export default function Themes(data) {
    let all_ = document.getElementsByClassName("themeBody")
    
    function click(id){
        for(let i=0;i<all_.length;i++){all_[i].classList.remove("activeTheme")}
        all_[id-1].classList.add("activeTheme")
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
