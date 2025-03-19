import { EmbedBuilder, PermissionsBitField } from "discord.js";

export default async function getBan(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Menciona a alguien para banear.");
    }

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
        return message.reply("No tienes permisos para banear miembros.");
    }

    const member = message.guild.members.cache.get(mentionedUser.id);

    if (!member) {
        return message.reply("El usuario mencionado no está en el servidor.");
    }

    try {
        await member.ban();
        const embed = new EmbedBuilder()
            .setColor("0A0A0A")
            .setDescription(`**${mentionedUser.username}** fue baneado del servidor.`);

        message.reply({ embeds: [embed] });
    } catch (error) {
        console.error(error);
        message.reply("Hubo un error al intentar banear al usuario.");
    }
}