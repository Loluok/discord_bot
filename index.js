import { Client, Events, ActivityType } from "discord.js";
import commands from "./commands/index.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: 53608447,
  presence: {
    status: "online",
    activities: [
      {
        name: "Morat",
        type: ActivityType.Listening,
      },
    ],
  },
});

client.on(Events.ClientReady, async () => {
  console.log(`¡Encendido como ${client.user.username}!`);
});

client.prefix = "r!";

client.on(Events.MessageCreate, async (message) => {
  if (message.content.slice(0, 2) !== client.prefix) return; // si el mensaje no empieza con "r!" entonces se ignora
  const messageWithoutPrefix = message.content
    .slice(2) // copiamos todo el mensaje sin el "r!" <3
    .toLowerCase() // convierte todo a minúscula :)
    .trim(); // Remueve los espacios innecesarios :o

  if (commands[messageWithoutPrefix]) {
    commands[messageWithoutPrefix](message);
  }
});

client.login(process.env.DISCORD_TOKEN);
