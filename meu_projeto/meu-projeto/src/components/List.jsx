import styles from "./Lista.module.css";
import Item from "./Item";

function Lista() {
  return (
    <>
      <ul className={styles.lista}>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item />
        <Item />
      </ul>
    </>
  );
}

export default Lista;
