import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1312131851615338598/kitty.gif?ex=674b6183&is=674a1003&hm=2b9575424b807978e75fd047a4e8296eebbe2f525139dfd6e790ba1505d3ffed&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131853746049055/Cat_Sleep_GIF_-_Cat_Sleep_Tired_-_Discover__Share_GIFs.gif?ex=674b6184&is=674a1004&hm=0cb7f8dd4545c038b95b80a49e8085409020c054f4fd359f6c4e2a2225c8700a&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131853746049055/Cat_Sleep_GIF_-_Cat_Sleep_Tired_-_Discover__Share_GIFs.gif?ex=674b6184&is=674a1004&hm=0cb7f8dd4545c038b95b80a49e8085409020c054f4fd359f6c4e2a2225c8700a&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131878211551354/Trending_GIF_sleep_falling_surreal_nightmare_falling_dream.gif?ex=674b6189&is=674a1009&hm=2f1faaeccc48f35e643224e79c7660d62e6b7c989dafe73c687c4050c251031f&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131878861410424/descarga_3.gif?ex=674b618a&is=674a100a&hm=ccec8d3a1e07b378752d8ead5b3e83aca7e17a7d49c2f21fbbd9f9c6b863d332&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131879641813012/descarga_2.gif?ex=674b618a&is=674a100a&hm=e52665e01cb752180cdd8b3b2e8310f80f923514c3c2b6db5b0a6536e9ef51dc&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131880153382963/descarga_1.gif?ex=674b618a&is=674a100a&hm=024ce78021a890cf3a274c8b91997e5b0edb8767031f87d0f494ae8e36785cc3&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131897983373372/Sleepy_Head_GIF_-_Sleepy_Head_-_Discover__Share_GIFs.gif?ex=674b618e&is=674a100e&hm=96b130ccf98a487d46656c0657be41d999c7bb552533354b7b508871a57e48de&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131898901925928/Snoopy_Sleeping_GIF_-_Snoopy_Sleeping_-_Descubre_y_comparte_GIF.gif?ex=674b618e&is=674a100e&hm=2a74680b814c38baf7ac08f7d465f55cb9869569a65522bd2360bf736f4f44c6&"]

const messages = ["se acostó con", "se echó una siestita con", "se echó una siesta con", "duerme con", "se acostó a dormir con", "descansa con"]
const messagesAlone = ["duerme", "se durmió", "se echó una siestita", "se acostó a mimir", "hace zzz"]

export default function getSleep(message) {
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
        .setColor("191970")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })
}