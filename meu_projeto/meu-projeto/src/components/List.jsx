import styles from "./Lista.module.css"
import Item from "./Item"
function Lista() {
    return (
        <>
            <ul className={styles.lista}>
                <Item marca = "Ferrari" />
                <Item marca = "Meta" />
            </ul>
        </>
    )
}

export default Lista