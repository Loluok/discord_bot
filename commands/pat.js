import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1311795443105005699/Pat_Duck_Sticker_-_Pat_Duck_Cute_-_Discover__Share_GIFs.gif?ex=674a2835&is=6748d6b5&hm=ace5f502379bd83ba0fefb2a7d790dd484321b425410f1a96043e00427cca14a&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795444078219304/Seal_Hibo_GIF_-_Seal_Hibo_Pat_-_Discover__Share_GIFs.gif?ex=674a2835&is=6748d6b5&hm=5ec00084b0ec4bca26b834e3eb96e24033c79023645cdac1159b84880d559da9&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795444493451384/Patpat_Sticker_-_Patpat_-_Discover__Share_GIFs.gif?ex=674a2835&is=6748d6b5&hm=01884c910fbc88352c3aa20e099782ed1be213d61ff6ae6bd663caf17df314d5&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795444959023114/Pat_Pat_Sticker_-_Pat_pat_-_Temukan__Bagikan_GIF.gif?ex=674a2836&is=6748d6b6&hm=292bee655268121d276f041fe98df4ed355be3d770b7cf842337c99df3d30a93&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795445529579540/https___c_tenor.com_ynFUoAowiP4AAAAC_patpat-pat.gif?ex=674a2836&is=6748d6b6&hm=fbf827547f564c1adfc3dc0508936d9009333cacf3d7da4ae95d34b382b11244&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795446368178206/Hm_Hmsquish_Sticker_-_Hm_Hmsquish_Pat_-_Discover__Share_GIFs.gif?ex=674a2836&is=6748d6b6&hm=29f80028cea2f6f587443a96b8c19b7cb769da8eef10ed34a95b05c870a7ca87&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795446791929867/Bigfloppa_Pat_Sticker_-_Bigfloppa_Pat_-_Descubre_y_comparte_GIF.gif?ex=674a2836&is=6748d6b6&hm=baf77d255e132e7dd1f94cfd85bda53def4679de1a121715d8aaa876434ac1d6&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1311795562353262654/Duck_Animal_Love_GIF_Duck_Animal_Love_Pet_odkrywaj_i_udostepniaj_GIF-y-min.gif?ex=674a2852&is=6748d6d2&hm=ef2667ade3867d95c46546cfe3a9df91ff47a0147f2732ad67b1dfa7f3a473b0&"]

const messages = ["acarició a", "le da caricias a", "anda acariciando a", "le da mimos a", "acaricia a"]

export default function getPat(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("No te podés acariciar a vos mismo, no seas otaku. Mencioná a alguien.")
    }

    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const userMessage = message.member.user.username;

    const embed = new EmbedBuilder()
        .setColor("EE9F27")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] })

}