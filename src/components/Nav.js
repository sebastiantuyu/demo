import '../styles/Nav.css';
import SlideMenu from './SlideMenu.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGripLines} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Nav() {
    const [state, setState] = useState(true)
    
    function showSlide() {
        let sMenu = document.querySelector("#sMenu")
        let bMenu = document.querySelector("#backMenu")
        let body = document.querySelector("body")
        if (state){
            bMenu.style.display = "block"
            sMenu.style.right="0px";
            body.style.overflowY = "hidden";
            setState(false)
        } else {
            bMenu.style.display= "none"
            sMenu.style.right= "-1000px";
            body.style.overflowY = "scroll";
            setState(true)
        }        
    }

    return (
        <>
        <SlideMenu change={showSlide}/>
            <nav>
                <div className="btnL-menu m"></div>
                <div className="btnR-menu m" onClick={showSlide}>
                <FontAwesomeIcon icon={faGripLines} />
                </div>
                
            </nav>
        </>
    );


    
}