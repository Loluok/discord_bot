import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311486505981575298/Cat_Pout_GIF_-_Cat_Pout_Kitty_-_Discover__Share_GIFs.gif?ex=6749087d&is=6747b6fd&hm=d16d72a1a4279789ad89b7e5b2e57f239865fab54dbe00206eec4d2bb04b7c65&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311486506606792784/gif_vec50.gif?ex=6749087d&is=6747b6fd&hm=e9d5454277847f3f1fa45167d6ee4db5124e5b67bc76a1d61ddad78ac0098724&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311486507013505165/Emoji_Emoji_Hello_GIF_-_Emoji_Emoji_Hello_Hello_Emoji_-_Discover__Share_GIFs.gif?ex=6749087d&is=6747b6fd&hm=7c840f462e255cf05a838a2d4ec29795e05ee8fee89131fc075b50c2a295f001&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311486507474751539/BDCamilla_Luddington.gif?ex=6749087d&is=6747b6fd&hm=76ece4d1748900a1fad19d8b420d4f259fc23b23009b029c47d23f5d61f3d5a3&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311486507873341520/Penguin_Hi_Sticker_-_Penguin_Hi_Bye_-_Descubre_y_comparte_GIF.gif?ex=6749087d&is=6747b6fd&hm=98b0dbf8713b3282c35c49cd10dc2958225f1f40ac0cf271828ef251bd21e5f2&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311486508351623168/Hi_Hello_GIF_-_Hi_Hello_Andrew_-_Discover__Share_GIFs.gif?ex=6749087d&is=6747b6fd&hm=6869560787fccca8adaa00e3b6b6a0d077b60476f8460299e68fccf71eb02dca&"]

const messages = ["saluda a", "le dice hola a", "le da el buen día a", "le da las buenas tardes a"]
const messagesAlone = ["está saludando!", "dice hola!", "anda saludando!", "da el buen día!", "da las buenas tardes!"]

export default function getHi(message) {
    const mentionedUser = message.mentions.users.first()

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    const userMessage = message.member.user.username

    let description = `**${userMessage}** ${randomMessage} **${mentionedUser?.username}**`

    if (!mentionedUser) {
        const aloneMessage = messagesAlone[Math.floor(Math.random() * messagesAlone.length)]
        description = `**${userMessage}** ${aloneMessage}`
    }

    const embed = new EmbedBuilder()
        .setColor("FFD200")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}