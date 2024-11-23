import getHelp from "./help.js";
import getAngry from "./angry.js"
import getComando from "./nuevoComando.js";

const commands = {
  help: getHelp,
  nuevocomando: getComando,
  angry: getAngry,
};

export default commands;