import { useState } from 'react';
import ProcessBar from '../components/ProcessBar.js';
import './MakeProp.css'

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import themesList from '../components/ThemesList.js';

    
export default function MakeProp() {
    const themes_ = themesList
    const [state,setState] = useState({step:1,
                                      theme:1,
                                      title:1,
                                      tag:1,
                                      content:'',
                                      foto:'',  
                                        });
                                        
    function nextStep() {
        let {step} = {...state}
        if(step < 5) {
            setState({ ...state,step: step + 1})
        }
        console.log(state)
    }                                    

    function backStep() {
        let {step} = {...state}
        if (step > 1){
            setState({...state,step: step - 1})
        }
        console.log(state)
    }

    function handleChange(e,name) {
        
        switch(name){
            case "theme":
                setState({...state,theme: e.target.value})
                nextStep()
                break
            case "title":
                setState({...state,title: e.target.value})
                break
            case "tag":
                setState({...state,tag: e.target.value})
                break
            case "content":
                setState({...state,content: e.target.value})
                break
        }

        

    }

    function loadForm() {
        const {step} ={...state}

        var title = ""
        var bodyForm = ""
        var extraCss = ""
        switch(step){
            case 1:
                title = "¿Cual es tu objetivo general para mejorar?"
                extraCss = " flex-column align-items-around flex-wrap"
                bodyForm = 
                <> 
                    {
                        Object.keys(themes_).map(key => { 
                            return (
                            <div className="themeSelect d-flex align-items-center" onClick={e => handleChange(e,"theme")}>
                                <span className="themeLogo d-flex center-center">
                                    <img src={themes_[key].logo} alt="" className=""/>
                                </span>
                                {themes_[key].name}
                            </div>
                            )
                        })
                    }
                </>
                break
            case 2:
                title = "Escribe titulo de tu propuesta"
                extraCss = " flex-column align-items-center justify-content-around"
                bodyForm = 
                <> 
                    <span className="w-50 text-center helperText">
                        Esto el lo primero que verán los ciudadanos al ver tu propuesta
                        se breve y cautiva su atención.
                    </span>
                    <div className="d-flex align-items-center">
                        <input type="text" className="inputfTitle"
                            placeholder="Inicia tu propuesta" 
                            onChange={(e)=>handleChange(e,"title")}/>
                        <div className="button btn-f-v" onClick={nextStep}> Click Me</div>
                    </div>

                    <div className="flex-column text-center">
                        <span className="font-weight-bold">Ve al punto</span>
                        <span>Ejemplo: Hacer espacios para gente con discapacidad</span>  
                    </div>
                </>
                break
            case 3:
                title = "¿Quienes son las identidades que pueden solucionar tu propuesta?"
                extraCss = " flex-column align-items-center justify-content-around"
                bodyForm = 
                <> 
                    <span className="w-50 text-center helperText">
                    Etiqueta a personar o empresas que tengan relación 
                    con la solución de tu propuesta.
                    </span>
                    <div className="d-flex align-items-center">
                        <input type="text" className="inputfTitle"
                            placeholder="Etiqueta" 
                            onChange={(e)=>handleChange(e,"tag")}/>
                        <div className="button btn-f-v" onClick={nextStep}> Click Me</div>
                    </div>

                    <div className="flex-column text-center align-items-center">
                        <span className="font-weight-bold">Identidades relacionadas</span>
                        <span className="w-75 text-center">Las propuestas pueden involucrar a empresas públicas o privadas
                              ejemplo: “Ayuntamiento de Benito Juárez”</span>  
                    </div>
                </>
                break
            case 4:
                title = "Cuentanos más acerca de tu propuesta"
                extraCss = " flex-column align-items-center justify-content-around"
                bodyForm = 
                <> 
                    <span className="w-50 text-center helperText">
                    Explica tu propuesta lo más detallada y clara posible
                    para que todo podamos tomar una decisión y podamos 
                    aportar valor a la misma
                    </span>
                    <div className="flex-column align-items-center">
                        <input type="text" className="inputfTitle iFVariant"
                            placeholder="Decribe tu propuesta" 
                            onChange={(e)=>handleChange(e,"content")}/>
                        <div className="button btn-f-v buttonVariant" onClick={nextStep}> Click Me</div>
                    </div>

                    <div className="flex-column text-center align-items-center">
                        <span className="font-weight-bold">Explica la problematica</span>
                        <span className="w-75 text-center">
                            Usa palabras claras y se claro con el problema a resolver tomando en cuenta tu punto de vista y documentación de otras fuentes
                        </span>  
                    </div>
                </>
                break
            case 5:
                title = "Agrega una foto o video"
                extraCss = " flex-column align-items-center justify-content-around"
                bodyForm = 
                <> 
                    <span className="w-50 text-center helperText">
                        Complementa tu propuesta con una foto o video y
                        poder cautivar la atención de los ciudadanos.
                    </span>
                    <div className="uploadButton badge-pill p-3">
                            <span className="text-mDark">Subir archivo</span>
                        </div>
                    <div className="flex-column align-items-center">
    

                        <div className="d-flex mb-3">
                        <input type="url" className="inputfTitle m-0"
                            placeholder="https://" 
                            onChange={(e)=>handleChange(e,"tag")}/>
                            <div className="h-100 d-flex align-items-center addFile font-weight-bold">
                                <span className="px-4">Agregar</span>
                            </div>
                        </div>
                        <div className="button btn-f-v buttonVariant" onClick={nextStep}> Click Me</div>
                    </div>

                    <div className="flex-column text-center align-items-center">
                        <span className="font-weight-bold">Archivos adjuntos</span>
                        <span className="w-75 text-center">
                            Elige fotografías o agrega enlaces que tengan relación con tu propuesta.
                        </span>  
                    </div>
                </>
                break
        }

        return(
        <>
            <div className="fPheader d-flex align-items-end">
                <FontAwesomeIcon icon={faArrowLeft} 
                className="backStep align-self-center" onClick={backStep}/>
                <span className="textTitSecond fTitle text-center">
                    {title}
                    </span>
            </div>
            <div className={"fPbody" + extraCss}>
                {bodyForm}                    
            </div>
        </>
        )
    }                                   

    return (
        <div className="position-absolute w-100 h-100 flex-column justify-content-around align-items-center">
            <div className="formProp shadow-lg flex-column p-2">
                {loadForm()}
            </div>
            <ProcessBar position={state.step}/>
        </div>
    )
                                        
}
