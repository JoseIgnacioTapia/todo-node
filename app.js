import colors from "colors";

import { inquireMenu } from "./helpers/inquirer.js";

console.clear();

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";

  do {
    opt = await inquireMenu();
    console.log({ opt });
  } while (opt !== "0");

  // pausa();
};

main();
