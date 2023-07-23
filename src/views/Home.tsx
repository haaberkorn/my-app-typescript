import React from "react";
import { useEffect, useState } from "react";
import CardPersonaje from "../components/CardPersonaje";
import MarvelApi from "../services/services";
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import Personaje from "../types/personaje";



const Home = () => {
  const api = new MarvelApi();
  const [personajes, setPersonajes] = useState<Array<Personaje>>([]);
  const [paginas, setPaginas] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const obtenerPersonajes = async (pagina:number) => {
    try {
      const characters = await api.obtenerPersonajes(pagina);
      setPersonajes(characters);
    } catch (e) {
      mostrarError();
      console.log(e);
    }
  };

  /* let pagina = 0; */
  useEffect(() => {

    if (personajes.length === 0) {
      obtenerPersonajes(0);
    }
  });

  const siguientePagina = () => {
    paginas >= 78 ? setPaginas(0): setPaginas(paginas + 1)
    obtenerPersonajes(paginas + 1);
  };

  const anteriorPagina = () => {
    setPaginas(paginas - 1)
    obtenerPersonajes(paginas - 1);
  };
  const primeraPagina = () => {
    setPaginas(0)
    obtenerPersonajes(0)
  }
  const ultimaPagina = () =>{
    setPaginas(78)
    obtenerPersonajes(78)
  }

  function mostrarError() {
    setError("No se puede mostrar la informacion por los momentos...");
  }

  if (error !== "") {
    return (
      <div>
        <span>{error}</span>
      </div>
    );
  }

  if (personajes.length === 0) {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );
  }

  return (
    <>
      <main className="main">
        <div className="Home_main">
          {personajes.map((element) => {
            return (
              <CardPersonaje
                name={element.name}
                //description={element.description}
                imagen={element.imagen}
                id={element.id}
                seleccionarPersonaje={(name:string) => {
                  console.log(`selecciona personaje ${name}`);
                  navigate("/perfil", {
                    state: { id: element.id, personajes: personajes },
                  });
                }}
              />
            );
          })}

        </div>
        <div className="botones">
            <button onClick={ultimaPagina}>Ultima Pagina</button>
            {paginas !== 0 && <button onClick={anteriorPagina}>Anterior</button>}
            <span>{paginas}</span>

            <button onClick={siguientePagina}>Siguiente</button>
            <button onClick={primeraPagina}>Primera Pagina</button>
          </div>
      </main>
    </>
  );
};

/* class HomeC extends Component {
  api = new MarvelApi();
  componentDidMount() {
    this.obtenerPersonajes();
  }

  async obtenerPersonajes() {
    const resultado = await this.api.obtenerPersonajesApi(0);
    this.setPersonajes(resultado);
  }

  state = {
    personajes: [],
    cargando: false,
  };

  setPersonajes(personajes) {
    this.setState({
      personajes: personajes,
      ...this.state,
    });
    console.log("prueba");
  }

  render() {
    console.log(this.state);
    if (this.state.personajes.length === 0) {
      return (
        <div>
          <span>Cargando 2...</span>
        </div>
      );
    }
    return (
      <div>
        {this.state.personajes.map((element) => {
          return (
            <CardPersonaje
              name={element.name}
              description={element.description}
              imagen={element.imagen}
              id={element.id}
            />
          );
        })}
      </div>
    );
  }
}
 */
export default Home;
