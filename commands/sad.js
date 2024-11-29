import { EmbedBuilder } from "discord.js";

const randomGifs = [
  /**
   * acá lolu va a poner muchos gifs lindos de depresión!!!
   */
]

const messages = ["se puso triste por", "le agarró la depre por", "anda sad por", "llora por culpa de"]
const messagesAlone = ["anda depre", "ta tiste", "le caen lagrimitas", "tiene depresión."]

export default function getSad(message) {
    const mentionedUser = message.mentions.users.first();

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    const userMessage = message.member.user.username

    let description = `**${userMessage}** ${randomMessage} **${mentionedUser?.username}**`

    if (!mentionedUser) {
        const aloneMessage = messagesAlone[Math.floor(Math.random() * messagesAlone.length)]
        description = `**${userMessage}** ${aloneMessage}`
    }

    const embed = new EmbedBuilder()
        .setColor("2D572C")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}
