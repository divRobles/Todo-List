import Recurso1 from "./imgs/Recurso-1.png";
import Foto4Geeks from '../src/imgs/Foto4Geeks.png'
import "./App.css";
import ListaTareas from "./Componentes/ListaTareas";



function App() {
  return (
    <div className="App">
      <div className="container-img-cabecera">
        {/* <img src={Foto4Geeks} alt="logo" className="imagen-cabecera" /> */}
      </div>

      <div className="container-lista-tareas">
        <ListaTareas></ListaTareas>
      </div>

    </div>
  );
}

export default App;
