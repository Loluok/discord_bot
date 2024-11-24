import getHelp from "./help.js";
import getAngry from "./angry.js";
import getBlush from "./blush.js";
import getShip from "./ship.js";
import getGay from "./gay.js";

const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
  ship: getShip,
  gay: getGay,
};

export default commands;