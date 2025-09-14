import styles from "./Phrase.module.css"

function Phrase() {
    return (
        <>
            <div className={styles.phraseContainer}>
            This is a phrase using components and styling with css module
            </div>
            <div className={styles.phraseContent}> Another phrase hehe</div>
        </>
    )
}

export default Phrase