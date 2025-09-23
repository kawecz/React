import "./App.css";
import Lista from "./components/Lista";
function App() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <>
      <h1>Redenrização de Listas</h1>
      <Lista itens={meusItens}/>
      <Lista itens={[]}/>
    </>
  );
}

export default App;
