import '../styles/FormularioTarea.css'
import Tarea from './Tarea';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';


const FormularioTarea = (props) => {

    const input = document.querySelector(".input-tarea");

    const [textoTarea, setTexto] = useState('jbbjbjbj');


    const esCribiendoInput = (e) => {
            setTexto(e.target.value);
            if (e.key === 'Enter') {enviarTarea();};

    }
    const enviarTarea = (e) => {
        const tareaNueva = {
            id: uniqid(`tarea-`),
            texto: textoTarea,
            completada: false
        }
        setTexto((texto) => texto = '');
        props.onChange(tareaNueva);
        input.value = '';


    }


    return (

        <div className="container-formulario-tarea">

            <input type="text" className="input-tarea"
                placeholder='Escribe lo que no vas a hacer'
                onChange={esCribiendoInput} onKeyDown={esCribiendoInput}
            />

            <button className="boton-formulario-tarea" onClick={enviarTarea}>
                Enviar
            </button>



        </div>
    )


};

export default FormularioTarea;