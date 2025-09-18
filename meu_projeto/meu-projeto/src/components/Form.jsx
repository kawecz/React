import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário: ${name} foi cadastrado com a senha ${senha}`)
  }

  const [name,setName] = useState()
  const [senha,setSenha] = useState()

  return (
    <>
      <h1>Meu Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e)=> setName(e.target.value)} 
            className={styles.input}
            
          />
        </div>

        <div className={styles.div}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            onChange={(e)=> setSenha(e.target.value)}
            required
            min={1}
            className={styles.input}
          />
        </div>
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}

export default Form;
