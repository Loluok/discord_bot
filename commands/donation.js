import { EmbedBuilder } from "discord.js";
import { PROFILE_BOT_URL } from "../const.js";

export default function getDonation(message) {

  const embed = new EmbedBuilder()
    .setColor("42692F")
    .setTitle("DONÁ ACÁ 👇🏻")
    .setThumbnail(PROFILE_BOT_URL)
    .setDescription(`¡Agradecemos tu apoyo!

**[💵] [Paypal](https://www.paypal.com/paypalme/loluoc)** 
`)

  message.reply({ embeds: [embed] });
}