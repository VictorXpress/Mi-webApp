import {  Navigate, Route, Routes } from "react-router-dom";
import Bloques from "./components/bloques";
import Layaut from "./components/layaut";
import NavBar from "./components/nabvar";  // Corregí la importación de "nabvar"
import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <NavBar />
      <Layaut>        
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="*" element={<Navigate to = "/" />} />
            {/* <Route path="/bloques" element={<Bloques />} /> */}
          </Routes>
       
      </Layaut>
      <Footer></Footer>
    </div>
  );
}

export default App;  // Agregué la exportación por defecto del componente App
//Nuevas modificaciones 

