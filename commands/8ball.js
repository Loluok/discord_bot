import { EmbedBuilder } from "discord.js";

const messages = ["Sí", "No", "JAMÁS", "Las perspectivas no son buenas", "Preguntá en otro momento", "Probablemente", "Tal vez", "Quizás", "Mis fuentes me dicen que no", "Concéntrate y vuelve a preguntar", "Buen pronóstico", "RE SÍ"]

export default function get8ball(message) {
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]

    const embed = new EmbedBuilder()
    .setTitle("Tu respuesta es:")
    .setDescription(randomMessage)

    message.reply({ embeds: [embed] });
}