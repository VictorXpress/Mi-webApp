import Bloques from "./components/bloques";
import Button  from "./components/button";
import Layaut  from "./components/layaut";
import NavBar from "./components/nabvar";
function App() {
  

    return (     
        <div className="bg-secondary min-h-screen">
          <NavBar></NavBar>
          <Layaut>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a repudiandae sit earum, officiis id modi voluptatibus quasi nobis. Deleniti est exercitationem ab ipsa temporibus cumque, necessitatibus quas sit perferendis!</p>   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a repudiandae sit earum, officiis id modi voluptatibus quasi nobis. Deleniti est exercitationem ab ipsa temporibus cumque, necessitatibus quas sit perferendis!</p>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a repudiandae sit earum, officiis id modi voluptatibus quasi nobis. Deleniti est exercitationem ab ipsa temporibus cumque, necessitatibus quas sit perferendis!</p>         
          </Layaut>
          <Bloques/>
     
        </div>
      
    );
  }

export default App
