import './App.css'
import HelloWorld from './components/HelloWorld'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import Button from './components/Button'
import Lista from './components/List'

function App() {
  
  const url = "https://plus.unsplash.com/premium_vector-1724311221938-e79529501a75?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

 

  return (
    <>
      
      <HelloWorld/>
      <img src={url}/>   

      <Pessoa 
        nome = "kawe"
        idade = "20" 
        sexo ="M" 
        profissao = "Programador" 
      />
      <Frase nome = "kawe"/>
      <Button/>

      <Lista/>

    </>
  )
}

export default App
