import { EmbedBuilder, PermissionsBitField } from "discord.js";

export default async function getKick(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Menciona a alguien para kickear.");
    }

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
        return message.reply("No tienes permisos para kickear miembros.");
    }

    const member = message.guild.members.cache.get(mentionedUser.id);

    if (!member) {
        return message.reply("El usuario mencionado no está en el servidor.");
    }

    try {
        await member.kick();
        const embed = new EmbedBuilder()
            .setColor("0A0A0A")
            .setDescription(`**${mentionedUser.username}** fue kickeado del servidor.`);

        message.reply({ embeds: [embed] });
    } catch (error) {
        console.error(error);
        message.reply("Hubo un error al intentar kickear al usuario.");
    }
}