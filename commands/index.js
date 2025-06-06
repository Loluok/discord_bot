import getHelp from "./help.js";
import getPunch from "./punch.js";
import getBlush from "./blush.js";
import getShip from "./ship.js";
import getGay from "./gay.js";
import getFemboy from "./femboy.js";
import getCry from "./cry.js";
import getHug from "./hug.js";
import getAvatar from "./avatar.js";
import getAngry from "./angry.js";
import getBored from "./bored.js";
import getDance from "./dance.js";
import get8Ball from "./8ball.js";
import getSay from "./say.js";
import getHi from "./hi.js";
import getPat from "./pat.js";
import getKiss from "./kiss.js";
import getRun from "./run.js";
import getSad from "./sad.js";
import getSlap from "./slap.js";
import getSleep from "./sleep.js";
import getKill from "./kill.js";
import getChoose from "./choose.js";
import getFact from "./facto.js";
import getDonation from "./donation.js";
import getWhitelist from "./whitelist.js";
import getSuma from "./suma.js";
import getAdd from "./add.js";
import getResta from "./resta.js";
import getMultiplicacion from "./multiplicacion.js";

import getLolu from "./lolu.js";
import getDice from "./dice.js";
import getBlood from "./blood.js";
import getTranslate from "./translate.js";
import getKick from "./kick.js";
import getBan from "./ban.js";

/**
 * 
 * IDEA:
 * - que traduzca un texto :)
 * - sorteos
 * - confesiones
 * - guardar cantidad de abrazos/becho q se dieron cada uno uwu
 */
const commands = {
  help: getHelp,
  blush: getBlush,
  angry: getAngry,
  ship: getShip,
  gay: getGay,
  femboy: getFemboy,
  cry: getCry,
  hug: getHug,
  avatar: getAvatar,
  punch: getPunch,
  bored: getBored,
  dance: getDance,
  "8ball": get8Ball,
  say: getSay,
  hi: getHi,
  hello: getHi,
  pat: getPat,
  kiss: getKiss,
  run: getRun,
  sad: getSad,
  slap: getSlap,
  sleep: getSleep,
  kill: getKill,
  choose: getChoose,
  fact: getFact,
  facto: getFact,
  donation: getDonation,
  wh: getWhitelist,
  wl: getWhitelist,
  whitelist: getWhitelist,
  lolu: getLolu,
  dice: getDice,
  dado: getDice,
  blood: getBlood,
  translate: getTranslate,
  kick: getKick,
  ban: getBan,
  suma: getSuma,
  add: getAdd,
  resta: getResta,
  multiplicacion: getMultiplicacion,
};

export default commands;