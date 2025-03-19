import { EmbedBuilder } from "discord.js";

export default function getResta(message, messageContent) {

    let resta = messageContent[0]

    for (const num of messageContent) {
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

   