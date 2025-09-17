import { node } from 'prop-types'
import styles from './Form.module.css'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário " + e.target)
    }


    return(
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit = {cadastrarUsuario} >
                <input type="text" placeholder="Digite o seu nome" className={styles.input} required />
                <input type="submit" value="Cadastrar" />
            </form>
            

        </>
    )
}

export default Form