type Personaje = {
  name: string;
  description?: string;
  imagen?: string;
  id?: number;
  seleccionarPersonaje?: (name: string) => void | undefined;
};

export default Personaje;
