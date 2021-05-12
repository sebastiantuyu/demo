import { useState } from 'react';
import PropsCarrusel from '../components/PropsCarrusel';
import Themes from '../components/Themes';
import '../styles/PropViewer.css';
import './AllProposals.css';

export default function AllProposals() {
    const [theme_, setTheme_] = useState(1)
    const arr = Array(8).fill().map((i,pos) => pos+1)
    console.log(theme_)

    return (
            <>
            <div className="pView">
                <div className="vHead flex-column center-center">
                    <div className="textTitle vTitle">
                        Explora todas las propuestas de los ciudadanos
                    </div>

                    <div className="allThemes d-flex">
                        {
                        arr.map(i => {return <Themes id={i} activeTheme={true} context={{theme_,setTheme_}}/>})
                        }
                    </div>
                </div>
                <div className="vHeader flex-column justify-content-around">
                    {
                        Array(3).fill().map((i,pos) => <PropsCarrusel header={""} number={4} arrow={false} context={theme_}/>)
                    }
                    
                </div>
            </div>
            </>
    )
}
