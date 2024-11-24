import { EmbedBuilder } from "discord.js";

export default function getShip(message) {

    const randomNumber = Math.round(Math.random() * 100);
    const userMessage = message.member.user.username
    const mentionedUser = message.mentions.users.first()

    let extraMessage = ""

    if (!mentionedUser) {
       return message.reply("Debes mencionar a un usuario.")
    }

    if (randomNumber > 75) {
        extraMessage = "Es amor verdadero! 💘"
    }
    else if (randomNumber > 50) {
        extraMessage = "Podría funcionar! 🤗"
    }
    else if (randomNumber > 25) {
        extraMessage = "Remando en dulce de leche, pero remando 🚣🏻"
    }
    else if (randomNumber < 25) {
        extraMessage = "Lamento decirte que no da para un vinculo amoroso 😔💔"
    }


    const embed = new EmbedBuilder()
        .addFields(
            {
            name: "Test de Compatibilidad <3",
            value: `La compatibilidad entre **${userMessage}** y **${mentionedUser.username}** es ${randomNumber}%`,
            inline: false
            },
            {
            name: "Respuesta:",
            value: extraMessage,
            inline: false
            }
        )
        .setColor("720000")

    message.reply({ embeds: [embed] })
}

