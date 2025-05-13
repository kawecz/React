import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "kawe";

  function sum(a, b) {
    return a + b;
  }
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p> Hello, my name is {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="oi" />
      <HelloWorld />
    </div>
  );
}

export default App;
