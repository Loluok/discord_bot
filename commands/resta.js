import { EmbedBuilder } from "discord.js";

export default function getResta(message, messageContent) {
    let resta = messageContent[0]

    for (let i = 1; i < messageContent.length; i++) {
        const num = messageContent[i]
        resta = resta - Number(num)
    }

    const resultado = resta 


    const embed = new EmbedBuilder() 
        .setColor("DarkVividPink")
        .addFields(
            {
                name: "Resta",
                value: `El resultado de la resta es **${resultado}**`,
                inline: false
            }
                )

        message.reply({ embeds: [embed]})
    }

   