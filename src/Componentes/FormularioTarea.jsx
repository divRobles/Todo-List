import '../styles/FormularioTarea.css'
import Tarea from './Tarea';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';


const FormularioTarea = (props) => {

    const input = document.querySelector(".input-tarea");

    const [textoTarea, setTexto] = useState('jbbjbjbj');


    const esCribiendoInput = (e) => {
        setTexto(e.target.value);
        if (e.key === 'Enter') { enviarTarea(); };

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

        <div className="row d-flex justify-content-center w-100 p-0">
            <div className="container-formulario-tarea">
                <div className="col-9">

                    <input type="text" className="input-tarea"
                        placeholder='Escribe lo que no vas a hacer'
                        onChange={esCribiendoInput} onKeyDown={esCribiendoInput}
                    />
                </div>

                <div className="col-3">

                    <div className="boton-formulario-tarea" onClick={enviarTarea}>
                        Enviar
                    </div>

                </div>




            </div>
        </div>
    )


};

export default FormularioTarea;