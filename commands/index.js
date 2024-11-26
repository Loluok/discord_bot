import getHelp from "./help.js";
import getPunch from "./punch.js";
import getBlush from "./blush.js";
import getShip from "./ship.js";
import getGay from "./gay.js";
import getCry from "./cry.js";
import getHug from "./hug.js";
import getAvatar from "./avatar.js";
import getAngry from "./angry.js";
import getBored from "./bored.js";
import getDance from "./dance.js";
import get8Ball from "./8ball.js";
import getSay from "./say.js";

const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
  ship: getShip,
  gay: getGay,
  cry: getCry,
  hug: getHug,
  avatar: getAvatar,
  punch: getPunch,
  bored: getBored,
  dance: getDance,
  "8ball": get8Ball,
  say: getSay,
};

export default commands;