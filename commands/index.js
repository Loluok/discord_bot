import getHelp from "./help.js";
import getAngry from "./angry.js";
import getBlush from "./blush.js";

const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
};

export default commands;