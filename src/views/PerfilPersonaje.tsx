import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardPersonaje from "../components/CardPersonaje";
import Personaje from "../types/personaje";
import "../style/perfilPersojane.css";




const PerfilPersonaje = () => {
 
  const location = useLocation();
  const id = location.state?.id;
  const listaPersonajes:Array<Personaje> = location.state?.personajes || [];

  const [personaje, setPersonaje] = useState<Personaje>();
  const [positionPersonaje, setPositionPersonaje] = useState(0);
  

  const buscarPersonaje = () => {
    for (let index = 0; index <= listaPersonajes.length - 1; index++) {
      const element = listaPersonajes[index];

      if (id === element.id) {
        setPositionPersonaje(index);
        return element;
      }
    }
  };



const obtenerPersonajePosition = (index:number) => {
  //si el index(personaje) es menor que la ultima posicion de la lista de personaje, entonces el index es 0
  if (index > listaPersonajes.length - 1) {
    index = 0;
  // Si el index(personaje) es menor que 0 entonces el index sera la ultima posicion de la lista de personaje 
  }else if(index < 0){
    index = listaPersonajes.length -1;
  }
  //1asignamos el valor index al setPositionPersonaje
  setPositionPersonaje(index);
  return listaPersonajes[index];
};


  useEffect(() => {
    if (personaje === undefined) {
      const elementPersonaje = buscarPersonaje();
      setPersonaje(elementPersonaje);
    }
  });

  if (personaje === undefined) {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );
  }
  return (
    <>
    <div className="personajeCaja">
      <CardPersonaje
        id={personaje.id}
        name={personaje.name}
        description={personaje.description}
        imagen={personaje.imagen}
      />
    </div>
    <div className="botones">
        <button                   
            onClick={() => {
              console.log(positionPersonaje)
              const personajeObtenido = obtenerPersonajePosition(
                (positionPersonaje - 1)
              );
              setPersonaje(personajeObtenido);
            }}
          >
            Anterior
        </button>
        <button
            onClick={() => {
              const personajeObtenido = obtenerPersonajePosition(
                positionPersonaje + 1
              );
              if (positionPersonaje >= 0 && positionPersonaje <= 20) {
                setPersonaje(personajeObtenido);
              } else if (positionPersonaje >= 20) {
                setPositionPersonaje(positionPersonaje);
              }
            }}
          >
            Siguiente
        </button>
    </div>
    </>
  );
};
export default PerfilPersonaje;
