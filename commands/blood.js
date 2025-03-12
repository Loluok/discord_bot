import { EmbedBuilder } from "discord.js";
import { PROFILE_BOT_URL } from "../const.js";

export default function getBlood(message) {
  const embed = new EmbedBuilder()
    .setColor("3B0B1E")
    .setTitle("*blood.*")
    .setThumbnail("https://media.discordapp.net/attachments/1308585862803492934/1349192922381160559/55e957a2-9159-462a-b2b7-e074c3980b51.jpeg?ex=67d23553&is=67d0e3d3&hm=6f090b7445722771c50278ccf3b2035a1248ff64d6445985ae3396193e6eef78&=&format=webp&width=993&height=968")
    .setDescription(`**Hola, soy Aldo 💻 **
      Me gusta programar y los gatos.
      Me encanta ayudar, aunque seas una milipili palermitana que está leyendo esto.
      Cualquier cosa que necesites, estoy acá para servirle, su majestad. 🌟
      `)
    .setFooter({ text: "RAYE", iconURL: PROFILE_BOT_URL })

  message.reply({ embeds: [embed] });
} 