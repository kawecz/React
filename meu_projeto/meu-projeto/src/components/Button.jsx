import styles from "./Button.module.css";

function Button() {
  let button = document.querySelector("button")
  const button_click = (e) => {
    alert("Button Cliked");
    console.log(e.target);
    button.classList.toggle("act");
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
