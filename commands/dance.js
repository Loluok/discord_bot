import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311441794231435284/GIF.gif?ex=6748ded9&is=67478d59&hm=fb80374b5e37f0cc92eaf799ae7097ca55de829e2fc8498720ddd4e9565f9e41&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311441794768310292/Dancing_Emoji_GIF_Dancing_emoji_GIF-_.gif?ex=6748ded9&is=67478d59&hm=1b2fa3a80216b94e7c6309f96be302440805cc10912a32f5d03e3b14e1637c45&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311441795212771421/descarga_1.gif?ex=6748ded9&is=67478d59&hm=d2298cf0bbb9ecbea4f65fa9c04fee0d2ace1606e2c84001ecc625541f0d2c06&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311442069834698793/Fredbear_Dance_GIF_-_Fredbear_Dance_Fnaf_-_Discover__Share_GIFs-min.gif?ex=6748df1a&is=67478d9a&hm=be42057ccea51b631e5915036ca547bd1cf89c59bacd901acb43c96b84734ef4&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311442070392803409/Cat_Dancing_Meme_Dancing_GIF_-_Cat_Dancing_Meme_Dancing_Cat_-_Discover__Share_GIFs-min.gif?ex=6748df1a&is=67478d9a&hm=147c8098515950c884301ff3112ce5b668de9139b88821c5ef9d8c911e837488&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311442071013298277/Monkey_Dance_GIF_-_Monkey_Dance_Swag_-_Discover__Share_GIFs-min.gif?ex=6748df1b&is=67478d9b&hm=d69e593996056ab33852545734d616b27e0464a2c60097f7224237995c6a5174&"]

const messages = ["está bailando con", "rompe la pista de baile con", "baila hasta abajo con", "baila hasta el piso con", "disfruta bailando con", "baila con"];

export default function getDance(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Mencioná a alguien para bailar, no seas el rarito por favor.")
    }

    const userMessage = message.member.user.username;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    const embed = new EmbedBuilder()
        .setColor("B2FFFF")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] });
}
