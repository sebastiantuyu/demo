import '../styles/ProcessBar.css'
import ProcessItem from './ProcessItem'


const ProcessList = [
            {
                "title":"Tema",
                "logo":"",
            },{
                "title":"Titulo",
                "logo":"",
            },{
                "title":"Solución",
                "logo":"",
            },{
                "title":"Descripción",
                "logo":"",
            },{
                "title":"Adjuntos",
                "logo":"",
            }]

export default function ProcessBar(data) {
    let items = []
    function step() {
        for(let i=0;i<ProcessList.length;i++)
        {
            if(i<data["position"]){
                items.push(<ProcessItem title={ProcessList[i].title} active={true}/>)
            } else {
                items.push(<ProcessItem title={ProcessList[i].title}/>)
            }
        }

        console.log(ProcessList)
        return items
    }

    return (
        <div className="pBarBody d-flex">           
            {step()}
        </div>
    )
}
