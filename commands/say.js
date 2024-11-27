import { EmbedBuilder } from "discord.js";

export default function getSay(message, messageContent) {

    if (messageContent) {
        message.delete()
        message.channel.send(messageContent.join(" "))
    }
}