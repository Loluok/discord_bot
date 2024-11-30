import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311797991690080276/Puuung_Puung_Sticker_-_Puuung_Puung_Cute_-_Discover__Share_GIFs.gif?ex=674a2a95&is=6748d915&hm=c3024b41855a9d3601c764ff177fabc3418894c6a5a33796bfb54c7d99b6b34a&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131852022321152/descarga_6.gif?ex=674b6183&is=674a1003&hm=069f44bbc19c413d085e0ed0808ead06ddf3d30b94fdb673daeaef613d00e339&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311797460040941689/descarga_1.gif?ex=674a2a16&is=6748d896&hm=eceb6bd33460a07d1bd625f93b9baf5aadeea2f7bd93228923a038c334bbcf79&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311797314943455292/Love_Pat_GIF_-_Love_Pat_Khrisbayot_-_Discover__Share_GIFs.gif?ex=674a29f3&is=6748d873&hm=f8d0da7817559673c80d10fa4d2a33a4a7bb7b8d6902253bb6a88c988f8619a4&"]

const messages = ["besó a", "le dió un beso a", "le dió un besito a", "le come la boca a"]

export default function getKiss(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Mencioná a alguien, queremos chisme.")
    }

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const userMessage = message.member.user.username;

    const embed = new EmbedBuilder()
        .setColor("800040")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] })

}