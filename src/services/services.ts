import Personaje from "../types/personaje";

const baseUrlAPi = "http://gateway.marvel.com/v1/public/characters";
const parametroBase =
  "?apikey=85485bc509918ac0028554ff79bf9fb7&ts=1000&hash=f3ad556ab4cc113dd2e57c0dc1a51bf3";

type JsonResponse = {
  [key: string]: any;
};

class MarvelApi {
  async hacerRequest(Url: string) {
    const response = await fetch(Url);
    if (response.status === 200) {
      const responseJson: JsonResponse = await response.json();
      return responseJson;
    } else {
      console.log(await response.json());
    }
  }
  //TODO: como se pone un tipo json
  objetoPersonaje(personaje: JsonResponse): Personaje {
    return {
      name: personaje.name,
      description: personaje.description,
      imagen: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`,
      id: personaje.id,
    };
  }

  async obtenerPersonajes(offset: number) {
    const page = offset * 20;
    const url = `${baseUrlAPi}${parametroBase}&offset=${page}`;
    const resJson = await this.hacerRequest(url);
    const listPersonajes = resJson?.data?.results;
    console.log(listPersonajes);
    return listPersonajes.map((personaje: object) =>
      this.objetoPersonaje(personaje)
    );
  }

  async obtenerPersonajeId(parametroId: number) {
    const url = `${baseUrlAPi}/${parametroId}${parametroBase}`;
    console.log(url);
    const resJson = await this.hacerRequest(url);
    const personaje = resJson?.data?.results[0];
    //console.log(personaje)
    return this.objetoPersonaje(personaje);
  }

  async obtenerNamePersonajes(name: string) {
    const url = `${baseUrlAPi}/${parametroBase}&name=${name}`;
    const resJson = await this.hacerRequest(url);
    const listPersonajes = resJson?.data?.results;
    //console.log(listPersonajes())
    return listPersonajes.map((personaje: object) =>
      this.objetoPersonaje(personaje)
    );
  }
}
export default MarvelApi;
