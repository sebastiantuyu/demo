import '../styles/PropsCarrusel.css'
import Proposal from './Proposal.js'

let list = []

export default function PropsCarrusel(data) {
    //console.log(data["context"])
    
    
    function loadData() {
        list = []
        if (!data["context"]){
            for(let i = 0; i < data["number"]; i++) {
                // Simple dummy-random number for showing diff themes
                list.push(Math.floor(Math.random() * (9 - 1)) + 1)
            }
        } else {
            let temp = Array(data["number"]).fill().map(i =>  data["context"])
            console.log("TEMPORAL", temp)
            for(let i = 0; i < data["number"]; i++) {
                // Simple dummy-random number for showing diff themes
                list.push(data["context"])
            } 
        }
    }

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
        
        {loadData()}
        {checkTitle()}
         
        <div className={data["arrow"] ? "propCarr" : "propCarrEmpty" }>
            {
                list.map(i => <Proposal themes={i}/>)
            }
        </div>

      </section>
    )
}
