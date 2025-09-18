
import styles from "./Button.module.css";

function Button() {
  const button_click = (e) => {
    alert("Button Cliked");
    console.log(e.target);
  };


  return (
    <>
      <button className={styles.button} onClick={button_click}>
        Click me!
      </button>
    </>
  );
}

export default Button;
