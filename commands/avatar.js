import { EmbedBuilder } from "discord.js";

export default function getAvatar(message) {
    const mentionedUser = message.mentions.users.first() || message.author

    const avatar = mentionedUser.displayAvatarURL({extension: "png", size: 512}) 

    const embed = new EmbedBuilder()
    .setColor("45747B")
    .setDescription(`Foto de perfil de **${mentionedUser.username}** 💞`)
    .setImage(avatar)
    message.reply({ embeds: [embed] })
}