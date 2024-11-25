import getHelp from "./help.js";
import getAngry from "./angry.js";
import getBlush from "./blush.js";
import getShip from "./ship.js";
import getGay from "./gay.js";
import getCry from "./cry.js";
import getHug from "./hug.js";

const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
  ship: getShip,
  gay: getGay,
  cry: getCry,
  hug: getHug
};

export default commands;