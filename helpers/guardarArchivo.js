import { writeFileSync } from "fs";

export const guardarDB = (data) => {
  const archivo = "./db/data.json";

  writeFileSync(archivo, JSON.stringify(data));
};
