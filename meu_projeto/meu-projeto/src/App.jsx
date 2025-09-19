import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";



function App() {
  const url =
    "https://plus.unsplash.com/premium_vector-1724311221938-e79529501a75?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <h1>Testando Eventos</h1>
      <img src={url} />

    <Evento numero = "1"/>

    <Form />


    </>
  );
}

export default App;
