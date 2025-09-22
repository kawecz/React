import { useState } from "react";
import styles from "./Form.module.css";
import styles_button from "./Button.module.css";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail() {
    setUserEmail('')
  }

  return (
    <>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Escreva seu E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <button className={styles_button.button} onClick={enviarEmail}>
          Enviar{" "}
        </button>
        {userEmail && (
            <>
                <p>O E-mail do usuário é {userEmail}</p>
                <button onClick={limparEmail}>Limpar E-mail</button>
            </>
        )}
      </form>
    </>
  );
}

export default Condicional;
