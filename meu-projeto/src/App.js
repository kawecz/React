import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";


function App() {
  const name = "maria"
  return (
    <div className="App">
      <SayMyName nome = "kawe" />
      <SayMyName nome = "jão" />
      <SayMyName nome = {name}/>
      <Pessoa nome = "cabeção" 
      profissao = "programador" 
      idade = "20" 
      foto = "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480563319.jpg"
      />
    </div>
  );
}

export default App;
