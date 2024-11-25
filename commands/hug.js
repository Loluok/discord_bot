import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/837459049096020029/1310593882471534612/Puuung_Love_GIF_-_Puuung_Love_Hug_-_Discover__Share_GIFs.gif?ex=6745c92b&is=674477ab&hm=3742453afabff381f9bf86c78078d31a14bbe7fd02cd8fcfce6b0c810b0ff2c7&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310593882014351443/Puuung_Gif_GIF_-_Puuung_Gif_-_Discover__Share_GIFs.gif?ex=6745c92b&is=674477ab&hm=1def5f88f691e8f3a67aeb2865055c76f97928b3a5a1da1e38b3d05914cfe9a1&"
]

const messages = ["abrazó a", "le dió un cálido abrazo a", "abraza fuertemente a"]

export default function getHug(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Acá no podés autoabrazarte, abrazá a alguien :<")
    }

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const userMessage = message.member.user.username;

    const embed = new EmbedBuilder()
        .setColor("4C2882")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] })

}

