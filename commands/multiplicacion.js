import { EmbedBuilder } from "discord.js";

export default function getMultiplicacion(message, messageContent) {

let multiplicacion = 1

for (const num of messageContent) {
    multiplicacion = Number(num) * multiplicacion
}

    const embed = new EmbedBuilder()
    .setColor("Greyple")
    .addFields(
        {
            name: "Multiplicación",
            value: `El resultado de la multiplicación es **${multiplicacion}**`,
            inline: false
        }
    )

    message.reply({ embeds: [embed] })
}