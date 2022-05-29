import '../styles/FormularioTarea.css'
import Tarea from './Tarea';
import uniqid from 'uniqid';
import { useState } from 'react';


const FormularioTarea = (props)=>{


    const [textoTarea, setTexto] = useState('');

    const inputText = document.querySelector('.input-tarea');

    // let nuevaTarea;

    const esCribiendoInput =(e)=>{
        setTexto(e.target.value)
    }

    const enviarTarea =(e)=>{
        e.preventDefault();
    
        const tareaNueva = {
          id: uniqid(`tarea-`),
          texto: textoTarea,
        //   completada: false
        }
        props.onChange(tareaNueva);
    

    }


    return(

        <div className="container-formulario-tarea">

            <input type="text" className="input-tarea" 
            placeholder='Escribe lo que no vas a hacer'
            onChange={esCribiendoInput}
            />

            <button className="boton-formulario-tarea" onClick={enviarTarea}>
                Enviar
            </button>



        </div>
    )


};

export default FormularioTarea;