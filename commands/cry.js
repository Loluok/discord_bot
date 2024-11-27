import { EmbedBuilder } from "discord.js";

const randomGifs = [
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290647038689340/descarga_4.gif?ex=6744aec2&is=67435d42&hm=ac351b296bd0a312ab08379938519bf3686efabb4254c70b74f184b3a0232193&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290647487611010/Littlebitofab_Cry_Sticker_-_Littlebitofab_Cry_Huuu_-_Discover__Share_GIFs.gif?ex=6744aec2&is=67435d42&hm=1ff7b10f8f79829623b2f5b2755428f571ff1eddacca5e922426a66ed3cda748&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290648045322270/descarga_3.gif?ex=6744aec2&is=67435d42&hm=4325f26d531e1834785c77d8fa0f9ae1369add15bd2d6c07b6fdaccaaa8ee6e5&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290648456499211/descarga_2.gif?ex=6744aec2&is=67435d42&hm=cb8160ef0ccf11d8484b08321b14fd05cb5f8ea93547c1bfbd823d6e506ed766&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290648816943205/Anime_Run_Anime_Cry_GIF_-_Anime_Run_Anime_Cry_-_Discover__Share_GIFs.gif?ex=6744aec2&is=67435d42&hm=c06017edb5be84f60770e19a00b46749b22962d6a6436d5aef330f1a6ff8d8ea&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290649643221022/Crying_Meme_GIF_-_Crying_Cry_Meme_-_Discover__Share_GIFs.gif?ex=6744aec2&is=67435d42&hm=26778b42d337aa7b7bf9585fbac9b2519aac2c0841df5b7df6ba012d5d9e797c&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290650037620746/Crying_Stitch_GIF_-_Crying_Stitch_Sad_-_Discover__Share_GIFs.gif?ex=6744aec2&is=67435d42&hm=5e388fc94e510d7b71d1de7617096ac9a12c77ffa9d9b068085b61556e470e87&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290650452987904/https___media_tenor.com_gMC-purKMQ4AAAAC_sad-cry.gif?ex=6744aec3&is=67435d43&hm=5a7c90b96849db2037b1379610d28b2b2decaf49bc6565d83037a09b3ee60286&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290650909900932/descarga_1.gif?ex=6744aec3&is=67435d43&hm=56a94fcb79615dfcdf922f9fa3617e285036b8fe8922d59be05b2e4b1914190b&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290718320758784/Cant_Sleep_Powerpuff_Girls_GIF_-_Cant_Sleep_Powerpuff_Girls_Crying_-_Discover__Share_GIFs.gif?ex=6744aed3&is=67435d53&hm=6126b10c3b30e6588940a473824b3f962dad234cdaa47a3fadbbf97142b9e784&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290719012950117/descarga_7.gif?ex=6744aed3&is=67435d53&hm=10a7bd0d4fca4d97c686f46ef031193795e18feae899f387f5c32f24cbc5dd1d&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290719537365104/Milk_And_Mocha_Crying_Sticker_-_Milk_And_Mocha_Crying_Sad_-_Descobrir_e_Compartilhar_GIFs.gif?ex=6744aed3&is=67435d53&hm=b7bf23c1f65d3f3cba8a75c6ad04e887f9dc34e88b074788a06bc0bc60301cd0&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290720221040740/Trending_GIF_reaction_sad_pokemon_crying_pikachu_tttigu.gif?ex=6744aed3&is=67435d53&hm=8e4ccc715e1718725ea94215911f40ba1f4a5db3e9fc80a86e939ffc612e51d5&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290720812175360/Cry_Emotional_GIF_-_Cry_Emotional_Tears_-_Discover__Share_GIFs.gif?ex=6744aed3&is=67435d53&hm=b468a4c34421e74e7ec975b4141beebc4660112db57889773b33054ded63422d&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290721319682058/Sailor_Moon_Sad_GIF_-_Sailor_Moon_Sad_Cry_-_Discover__Share_GIFs.gif?ex=6744aed3&is=67435d53&hm=8a5f4e8901e2acdcde49cb4908add7058d2a2361700c2aeac9da8ee43afc96f6&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290721902821446/Cinderella_Sad_GIF_-_Cinderella_Sad_Crying_-_Discover__Share_GIFs.gif?ex=6744aed4&is=67435d54&hm=6c6941a47ac03a306a658f3b218407489db6b1462cccc0a8bd8cc05c7bac37d8&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290722414399638/Bubbles_Crying_GIF_-_Bubbles_Crying_Sob_-_Discover__Share_GIFs.gif?ex=6744aed4&is=67435d54&hm=ccacedf4d38dd837f1856ea9f9419365344822dfea713d5c0c66dd17db6fccf4&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290723022835843/Hug_Anime_GIF_-_Hug_Anime_Crying_-_GIF.gif?ex=6744aed4&is=67435d54&hm=09b896d3865ca318e3445b4a98773fda5899e42c9beac4ad7be4ae2d413c586a&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290724385853450/descarga_6.gif?ex=6744aed4&is=67435d54&hm=5f605a46c0cfce7a8825cb297d9824f3e167788074b016ad9dd981e04b6c477d&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290806145421312/La_pilar_de_los_dragones__kimetsu_no_yaiba_x_tu__un_viaje_en_el_tiempo.gif?ex=6744aee8&is=67435d68&hm=bff01e40d57aae3cec3b0e241e74311bd66c1db6db707c93fccad0a85f91e3a7&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290806912843837/9377824a93cf667e.gif?ex=6744aee8&is=67435d68&hm=5c3aa9ae633e988f586a0e0d91f7a1515465f62cff588fb136ce3234c11d0a17&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290807659692122/Deseo_Verlos_Partir_-_1.gif?ex=6744aee8&is=67435d68&hm=690836bfbbdebd8da986a1643c8c3685b2f3041a98956e5a6d24535082392716&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290808145969216/h3.gif?ex=6744aee8&is=67435d68&hm=9261d4755646697fd1cf2ece39ef1e8d5fcbaac60794903559d582f6bb76ea30&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290808850616403/descarga_5.gif?ex=6744aee8&is=67435d68&hm=71986d8a8a943421b0e6ce709bdf288a20ff60f1cc21a7eacd87b52869c040a4&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310290971338215557/https___media1_tenor.com_images_c7eb5bbae52025b4d2ad9b8224022bd4_tenor.gif?ex=6744af0f&is=67435d8f&hm=463a770cb14c20317a5aba3d2f24ff53273f081cc579c19191dd2bedadfbbcbe&"
]

const messages = ["está llorando por culpa de", "llora gracias a", "llora por", "tiene depresión gracias a"]
const messagesAlone = ["está llorando", "está destrozad@", "no deja de llorar"]

export default function getCry(message) {
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
        .setColor("00446A")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}