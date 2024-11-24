import { EmbedBuilder } from "discord.js";

const randomGifs = [
  "https://cdn.discordapp.com/attachments/837459049096020029/1310074658455949352/0276345dcddbdbd0ec0bb1df4f62cda2.gif?ex=6743e59a&is=6742941a&hm=1a3f6d34f9f3248d8221cfd8bbc4356548a6c1c03755060a131bdb666e4ba4d6&"
]

    const messages = ["se sonrojó por culpa de", "se puso nervios@ por"];

  export default function getBlush(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Menciona a alguien, no puedes sonrojarte solo.")
    }

    const userMessage = message.member.user.username;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    const embed = new EmbedBuilder()
        .setColor("f9d6d5")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] });
}
