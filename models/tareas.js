import Tarea from "./tarea.js";
/**
 *   _listado:
 *      { 'uuid-12345-1233-2: {id:12, desc:asd,completadoEN:92231} }
 */

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }
}

export default Tareas;
