import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase";
import Frase2 from "./components/frase2";


function App() {
  const name = "kawe";
  const sum = (a,b) =>{return a+b};

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p> Hello, my name is {name}</p>
      <p>Soma: {sum(10, 2)}</p>
      <HelloWorld />
      <Frase/>
      <Frase2/>
    </div>
  );
}

export default App;
