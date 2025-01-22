import { EmbedBuilder } from "discord.js";

export default function getShip(message) {

    const randomNumber = Math.round(Math.random() * 100);
    let userMessage = message.member.user.username
    const mentionedUser = message.mentions.users.first()

    let extraMessage = ""

    if (!mentionedUser) {
       return message.reply("Debes mencionar a un usuario.")
    }

    if (message.mentions.users.size > 1) {
        let index = 0;

        message.mentions.users.each((user) => {
            if (index === 1) {
                userMessage = user.username
            }
            index++;
        })
    }
    if (randomNumber > 95) {
        extraMessage = "Es amor verdadero! 💘"
    }
    else if (randomNumber > 75) {
        extraMessage = "Dense un gusto en salir 🥰"
    }
    else if (randomNumber > 50) {
        extraMessage = "Podría funcionar! 🤗"
    }
    else if (randomNumber > 25) {
        extraMessage = "Remando en dulce de leche, pero remando 🚣🏻"
    }
    else if (randomNumber > 10) {
        extraMessage = "Lamento decirte que no da para un vínculo amoroso 😔💔"
    }
    else if (randomNumber <= 10) {
        extraMessage = "Just no."
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
