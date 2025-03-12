import { EmbedBuilder } from "discord.js";
import { PROFILE_BOT_URL } from "../const.js";

export default function getLolu(message) {
  const embed = new EmbedBuilder()
    .setColor("3B0B1E")
    .setTitle("LOLU ☯︎")
    .setThumbnail("https://cdn.discordapp.com/attachments/837459049096020029/1349168170656731238/descarga_7.jpg?ex=67d21e46&is=67d0ccc6&hm=5bb4e79b2a11e651037d95784b0e75aeaa229904c0b57b7324fc1ba4967b7068&")
    .setDescription(`**Soy Lolu, tengo 18 años 🦋**

    Amo las hamburguesas y el sushi
    Me gusta programar y Blood me enseña ꨄ︎
    ☆ Hobbys: Patín sobre hielo, teoría musical e instrumentista
    
    Ah, y soy fan de Morat y Olivia Rodrigo.`)
    .setFooter({ text: "spicy gemini ♊︎", iconURL: PROFILE_BOT_URL })

  message.reply({ embeds: [embed] });
} 
