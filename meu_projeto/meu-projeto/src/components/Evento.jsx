import Button from "./evento/Button";

function Evento() {
  const meuEvento = () => {
    console.log(`Ativando primeiro evento`);
  };

  function segundoEvento() {
    console.log("ativando o segundo evento");
  }

  return (
    <>
      <p>Clique para disparar um evento:</p>

      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </>
  );
}

export default Evento;
