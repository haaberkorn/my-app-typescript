import { useEffect, useState } from "react";
import MarvelApi from "../services/services";

const ListPersonaje = () => {
  const api = new MarvelApi();
  const [paginas, setPaginas] = useState([]);

  const obtenerListPersonajes = async () => {
    const Listcharacters = await api.obtenerPersonajes();
    setPaginas(Listcharacters);
  };
  useEffect(() => {
    obtenerListPersonajes();
  }, [setPaginas]);

  return (
    <>
      <button
        onClick={() =>
          paginas.length >= 20 ? setPaginas(1) : setPaginas(paginas.length + 1)
        }
      >
        siguiente
      </button>
    </>
  );
};

export default ListPersonaje;
