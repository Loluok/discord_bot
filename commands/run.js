import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311804333452689418/Running_Shrek_GIF_-_Running_Shrek_Running_Late_-_Discover__Share_GIFs.gif?ex=674a307d&is=6748defd&hm=91010b1463948962ebe31a3b8f36547c637efc232431c00a871d4ecb123f0573&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311805633066045460/Gifs_animados_de_bebes.gif?ex=674a31b3&is=6748e033&hm=edbaf901074f6ec488b4e1e0b73dc39a1fd6101f74401f8544af03e65da2748f&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311805633628078253/Run_Running_GIF_-_Run_Running_Running_Away_-_Discover__Share_GIFs.gif?ex=674a31b3&is=6748e033&hm=bf5772d64bdd3cf9a3a255d790bd017786a21741145c0d9961f31f365e895188&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311805680059158558/Running_Late_GIF_-_Running_Late_Puppet_-_Discover__Share_GIFs.gif?ex=674a31be&is=6748e03e&hm=55d378bdf3f4987edd91c3a5015dff3ab6f4ce312e3afe63ac429c76d1c4d678&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311805680448966747/PENGUI_RUNNING.gif?ex=674a31be&is=6748e03e&hm=47ab88cf91895b6d35c791738c6e30559a07453a1c8fa4fe970363a5fdf3f4e1&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311804660364873749/Running_Quick_GIF_-_Running_Quick_Fast_-_Discover__Share_GIFs.gif?ex=674a30cb&is=6748df4b&hm=93ab04e5c7a1f5924a9469a0728a42381963595fa02b857a016c613eb663566a&"]

const messages = ["está corriendo de", "corre con", "está corriendo con", "escapa de", "se escapa con", "flashea ser flash con", "se escabulla con"]
const messagesAlone = ["se escapa", "está corriendo", "corre", "se escabulla", "se va corriendo"]

export default function getRun(message) {
    const mentionedUser = message.mentions.users.first();

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    const userMessage = message.member.user.username

    let description = `**${userMessage}** ${randomMessage} **${mentionedUser?.username}**`

    if (!mentionedUser) {
        const aloneMessage = messagesAlone[Math.floor(Math.random() * messagesAlone.length)]
        description = `**${userMessage}** ${aloneMessage}`
    }

    const embed = new EmbedBuilder()
        .setColor("2D572C")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}
