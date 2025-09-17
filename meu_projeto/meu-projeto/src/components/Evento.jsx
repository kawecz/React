
import styles from './Button.module.css'

function Evento({numero}) {

    const meuEvento = () =>{
        alert(`Opa, fui ativado ${numero}`)
        console.log(`Opa, fui ativado ${numero}`)
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento} className={styles.button} >Ativar!</button>
        </>
    )
}

export default Evento