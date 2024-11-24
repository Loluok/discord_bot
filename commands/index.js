import getHelp from "./help.js";
import getAngry from "./angry.js";
import getBlush from "./blush.js";
import getShip from "./ship.js";

const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
  ship: getShip
};

export default commands;