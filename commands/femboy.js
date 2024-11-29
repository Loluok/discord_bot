import { EmbedBuilder } from "discord.js";

export default function getFemboy(message) {
  const randomNumber = Math.round(Math.random() * 100);
  let user = message.mentions.users.first();

  if (!user) {
    user = message.member.user;
  }

  const embed = new EmbedBuilder()
    .addFields(
      {
        name: "Test de Femboy 🙈",
        value: `El porcentaje de femboy de **${user.username}** es **${randomNumber}%**`,
        inline: false
      },
    )
    .setColor("720000")

  message.reply({ embeds: [embed] })
}
