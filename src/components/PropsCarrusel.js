import Proposal from './Proposal.js'

let list = []

export default function PropsCarrusel(data) {

    (function loadData() {
        list = []
        for(let i = 0; i < data["number"]; i++) {
            // Simple dummy-random number for showing diff themes
            list.push(Math.floor(Math.random() * (9 - 1)) + 1)
        }
    })();

    function checkTitle() {
        //If headers are empty, do not print title
        if(data["header"] != "") {
            return(
                <div className="propTitle">
                    <span className="textTitSecond">{data["header"]}</span>
                </div>
            );
        }
    }

    return (
        <section className="propContainer">
        
        {checkTitle()}
         
        <div className={data["arrow"] ? "propCarr" : "propCarrEmpty" }>
            {
                list.map(i => <Proposal themes={i}/>)
            }
        </div>

      </section>
    )
}
