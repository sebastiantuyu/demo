import Proposal from './Proposal.js'

let list = []

export default function PropsCarrusel(data) {

    (function loadData() {
        list = []
        for(let i = 0; i < data["number"]; i++) {
            list.push(i)
        }
    })();

    return (
        <section className="propContainer">

        <div className="propTitle">
            <span className="textTitSecond">{data["header"]}</span>
        </div>
        
        <div className="propCarr">
            {
                list.map(i => <Proposal />)
            }
        </div>

      </section>
    )
}
