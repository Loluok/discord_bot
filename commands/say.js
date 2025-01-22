import { EmbedBuilder } from "discord.js";

export default async function getSay(message, messageContent) {

    if (messageContent) {
        message.channel.send(messageContent.join(" "))

        try {
            await message.delete()
        } catch (error) {
            console.error(error)
        }
    }
}