import "../style/cardPersonaje.css";
import Personaje from "../types/personaje";


const CardPersonaje = (props:Personaje) => {
  const name = props.name;
  const description = props.description;
  const imagen = props.imagen;
  const id = props.id;
  const seleccionarPersonaje = props.seleccionarPersonaje;

  return (
    <>
      <div
        className="Personaje_Caja"
        onClick={() => {
          if (seleccionarPersonaje !== undefined) seleccionarPersonaje(name);
        }}
      >
        <img className="Personaje_Img" src={imagen} alt="" />
        <div className="Personaje_Texto">
          <span>ID: {id}</span>
          <span>Nombre: {name}</span>
          <span>Descripcion: {description}</span>
        </div>
      </div>
    </>
  );
};

export default CardPersonaje;
