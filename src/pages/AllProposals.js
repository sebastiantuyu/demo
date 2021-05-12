import PropsCarrusel from '../components/PropsCarrusel';
import Themes from '../components/Themes';
import '../styles/PropViewer.css';
import './AllProposals.css';

export default function AllProposals() {
    const arr = [1,2,3,4,5,6,7,8]

    return (
            <>
            <div className="pView">
                <div className="vHead flex-column center-center">
                    <div className="textTitle vTitle">
                        Explora todas las propuestas de los ciudadanos
                    </div>

                    <div className="allThemes d-flex">
                        {
                        arr.map(i => {return <Themes id={i} activeTheme={true}/>})
                        }
                    </div>
                </div>
                <div className="vHeader">
                    <PropsCarrusel header={""} number={4} arrow={false}/>
                    <PropsCarrusel header={""} number={4} arrow={false}/>
                    <PropsCarrusel header={""} number={4} arrow={false}/>
                </div>
            </div>
            </>
    )
}
