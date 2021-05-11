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
    },
    8:{
         name:"Artes y Expresión",
         logo:ArtExp,
    },
}

export default function Themes(data) {
    return (
    <span className="themeBody">
        <span className="themeIcon">
            <img src={themes[data["id"]].logo} alt="" />
        </span> 
        <span>{themes[data["id"]].name}</span>
    </span>
    )
}
