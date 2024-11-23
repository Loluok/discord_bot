import { Client, Events } from 'discord.js';
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
    intents: 53608447
});

client.on(Events.ClientReady, async () => {
    console.log(`¡Encendido como ${client.user.username}!`)
});

client.login(process.env.DISCORD_TOKEN)

