import { EmbedBuilder } from "discord.js";

const randomGifs = []

const messages = ["está aburrido por", "está empelotado por", "se aburre gracias a"]
const messagesAlone = ["está aburrido", "se aburre", "anda vag@"]

export default function getBored(message) {
    const mentionedUser = user.mentions.users.first()

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    const userMessage = message.member.user.username

    let description = `**${userMessage}** ${randomMessage} **${mentionedUser?.username}**`

    if (!mentionedUser) {
        const aloneMessage = messagesAlone[Math.floor(Math.random() * messagesAlone.length)]
        description = `**${userMessage}** ${aloneMessage}`
    }

    const embed = new EmbedBuilder()
        .setColor()
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}