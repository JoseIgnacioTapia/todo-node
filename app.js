import colors from "colors";

import { inquireMenu, pausa, leerInput } from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";
import { guardarDB } from "./helpers/guardarArchivo.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        // crear opcion
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
      default:
        break;
    }

    // guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
