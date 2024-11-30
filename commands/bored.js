import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311444695750283306/Bored_Hanging_GIF_-_Bored_Hanging_Bird_-_Discover__Share_GIFs.gif?ex=6748e18c&is=6747900c&hm=5662e77a3f48343162625a6449d99182588594cae183452b2e6814a57801aa6e&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311444696328835182/Waiting_Bored_GIF_-_Waiting_Bored_-_Descubre_y_comparte_GIF.gif?ex=6748e18d&is=6747900d&hm=45a5e1978dab512f9c7b9457cfe454b2a1b63ea8fbdedbc3b2cfb53ebc611d9d&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131852898795571/descarga_5.gif?ex=674b6183&is=674a1003&hm=c9d2fa69d936d4eb93e19d5b9c1d5ddd09884c3e87a1b9b089207ee6981c90fd&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311444696714838016/uwu.gif?ex=6748e18d&is=6747900d&hm=4fc2d94e1d166d430f21b357878d0566033c343e70da62b583d2657a9474c229&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311444697192857640/descarga_1.gif?ex=6748e18d&is=6747900d&hm=e9581c8406320ebe78bd17f6a84a0a97287d437a8bbba98aa0525214dbbf31a5&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311444873236189254/Tom_And_Jerry_Jerry_GIF_-_Tom_And_Jerry_Jerry_Bored_-_Discover__Share_GIFs-min.gif?ex=6748e1b7&is=67479037&hm=6e5866851df91ad5c4200568d65738785cf4c33089c05f67d82f4698e84f5d95&"]

const messages = ["está aburrido por", "está empelotado por", "se aburre gracias a"]
const messagesAlone = ["está aburrido", "se aburre", "anda vag@"]

export default function getBored(message) {
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
        .setColor("FF8000")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}