import { EmbedBuilder } from "discord.js";

const randomGifs = [
    "https://cdn.discordapp.com/attachments/882829220198375434/1312127046607962215/descarga_1.gif?ex=674b5d0a&is=674a0b8a&hm=5e09fcbba34d9c77415a4a0a3247868f28b50a8a3053c2c4e4e06faacf1a9125&",
    "https://cdn.discordapp.com/attachments/1308585862803492934/1312132633374883991/20a8b90722f97b0a90bf4d1455fa072c.gif?ex=674b623e&is=674a10be&hm=ff95d4a0c6f17caee240c99854e0cf03b89d29aba384c2c391cf75dc08497a66&",
    "https://cdn.discordapp.com/attachments/1308585862803492934/1312133575822278776/sad-hamster-sadhamster.gif?ex=674b631e&is=674a119e&hm=0b103d9afad9720609de65cf5dd3c05ec4c81b6be2dbe0f9c443a68b5292a6f7&",
    "https://cdn.discordapp.com/attachments/1308585862803492934/1312133710841380986/stitch-sad-sad-stitch.gif?ex=674b633e&is=674a11be&hm=634dcaacee14b0507ca6fb5daf9345f2a3acf5e77a995ee23f9263b10ad1199e&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312127047128060015/https___c_tenor.com_hOQePAOA6IQAAAAC_doomer-doomer-sad.gif?ex=674b5d0a&is=674a0b8a&hm=dbcd2423220c856f3a984cf4d0eb15ccdd6bc5a461f5125ab812ea9392a13e2a&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312127047568457808/Please_Forgive_Me_Sad_GIF_-_Please_Forgive_Me_Forgive_Me_Sad_-_Discover__Share_GIFs.gif?ex=674b5d0a&is=674a0b8a&hm=f640a69801976e2d7c3fd7e300ea4a212c232cfea28e87df0a3a0e846367e0e3&"
]

const messages = ["se puso triste por", "le agarró la depre por", "anda sad por", "está triste por culpa de"]
const messagesAlone = ["anda depre", "ta tiste", "le caen lagrimitas", "tiene depresión.", "ta kiste"]

export default function getSad(message) {
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
