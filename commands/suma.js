import { EmbedBuilder } from "discord.js";

export default function getSuma(message, messageContent) {

    let sumas = 0

    for (const num of messageContent) {
        sumas = Number(num) + sumas
    }

    const result = sumas

    const embed = new EmbedBuilder()
        .setColor("Aqua")
        .addFields(
            {
                name: "Suma",
                value: `El resultado de la suma es **${result}**`,
                inline: false
            },
        )

    message.reply({ embeds: [embed] })
}