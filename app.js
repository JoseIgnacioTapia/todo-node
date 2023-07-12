import colors from "colors";

import {
  inquireMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
} from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    // Cargar las tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        // crear opcion
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);

      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        // console.log({ id });
        break;
      default:
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
