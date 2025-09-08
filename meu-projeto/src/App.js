import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase";
import Frase2 from "./components/frase2";


function App() {
  const name = "kawe";
  const sum = (a,b) =>{return a+b};
  const url = "https://plus.unsplash.com/premium_vector-1724398926233-5669e3dbd75e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <p> Hello, my name is {name}</p>
      
      <p>Soma: {sum(10, 2)}</p>

      <img src={url} alt="imagem" />

      <HelloWorld />
      <Frase/>
      <Frase2/>
    </div>
  );
}

export default App;
