import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import '../styles/Tarea.css'

function Tarea({ id, texto, estaCompletada, eliminar, completarTarea}) {


    return(
        <div className= {estaCompletada ? `container-tarea estaCompletada` : `container-tarea`} id={id}  >
            <div className="texto-tarea">
                {texto}
            </div>

            <div 
            className="container-icono-tarea" 
            onClick={()=>completarTarea(id)}>
                <AiOutlineCheck  className="icono-tarea" />
            </div>
            <div 
            className="container-icono-tarea" 
            onClick={()=>eliminar(id)}>
                <AiOutlineDelete  className="icono-tarea" />
            </div>
        </div>
    )
}

export default Tarea;