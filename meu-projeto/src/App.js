import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Frase from "./components/Frase";

function App() {
  const name = "kawe";

  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <p> Hello, my name is {name}</p>
      <HelloWorld />
      <Frase/>
    </div>
  );
}

export default App;
