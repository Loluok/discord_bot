import { exec } from "child_process";

const removeAnsiCodes = (str) => str.replace(/\x1b\[[0-9;]*m/g, "");

const possibleWhitelistCommands = ["add", "remove"]

export default async function getWhitelist(message, messageContent) {
  const [whitelistCommand, player] = messageContent;
  if (!possibleWhitelistCommands.includes(whitelistCommand)) {
    return message.reply(
      `${whitelistCommand} no se reconoce como un comando de whitelist. \nIntenta "add" o "remove".`
    );
  }

  if (!player) {
    return message.reply("Por favor, especifica a un jugador");
  }

  const command = `mcrcon -H 127.0.0.1 -P 25575 -p "${process.env.SERVER_RCON_PASSWORD}" "whitelist ${whitelistCommand} ${player}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return message.reply("Hubo un error al intentar ejecutar el comando.");
    }

    if (stderr) {
      console.error(`Error en stderr: ${stderr}`);
      return message.reply("Hubo un problema con el comando.");
    }

    console.log(`stdout: ${stdout}`);
    return message.reply(`${removeAnsiCodes(stdout)}`);
  });
}